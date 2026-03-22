/**
 * THE CELESTIAL ENGINE
 * An interactive cosmic universe simulator
 * 
 * Features:
 * - Procedural star field (50,000+ stars)
 * - Galaxy generation (spiral/elliptical)
 * - Nebula clouds with volumetric effects
 * - Audio-reactive soundscape
 * - Post-processing effects
 * - 8+ Easter eggs
 * - Mobile/Touch support for iPad and mobile browsers
 */

// ============================================================================
// MOBILE DEVICE DETECTION
// ============================================================================

const MOBILE_CONFIG = {
  isMobile: false,
  isTablet: false,
  isTouch: false,
  pixelRatio: 1,
  enablePostProcessing: true
};

// Detect mobile device
function detectMobileDevice() {
  const ua = navigator.userAgent.toLowerCase();
  const isAndroid = ua.includes('android');
  const isIPhone = ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod');
  const isMobile = /mobile|webos|iphone|ipad|ipod|android|blackberry|opera mini|iemobile/i.test(ua);
  const isTablet = /ipad|tablet|playbook|silk/i.test(ua) || (ua.includes('android') && !ua.includes('mobile'));
  
  // Check for touch support
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  MOBILE_CONFIG.isMobile = isMobile || isAndroid || isIPhone;
  MOBILE_CONFIG.isTablet = isTablet || (isIPhone && navigator.maxTouchPoints > 1);
  MOBILE_CONFIG.isTouch = isTouch;
  
  // Force mobile detection on iPad
  if (ua.includes('ipad') || (ua.includes('mac') && 'ontouchstart' in window)) {
    MOBILE_CONFIG.isTablet = true;
    MOBILE_CONFIG.isMobile = true;
    MOBILE_CONFIG.isTouch = true;
  }
  
  // Set pixel ratio and post-processing based on device
  if (MOBILE_CONFIG.isMobile || MOBILE_CONFIG.isTablet) {
    MOBILE_CONFIG.pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    MOBILE_CONFIG.enablePostProcessing = !MOBILE_CONFIG.isMobile; // Disable on phones, enable on tablets
  }
  
  console.log('Device Detection:', {
    isMobile: MOBILE_CONFIG.isMobile,
    isTablet: MOBILE_CONFIG.isTablet,
    isTouch: MOBILE_CONFIG.isTouch,
    pixelRatio: MOBILE_CONFIG.pixelRatio,
    enablePostProcessing: MOBILE_CONFIG.enablePostProcessing
  });
}

// ============================================================================
// TOUCH CONTROLS FOR MOBILE/IPAD
// ============================================================================

class TouchControls {
  constructor(controls, camera, domElement) {
    this.controls = controls;
    this.camera = camera;
    this.domElement = domElement;
    
    // Touch state
    this.touches = [];
    this.lastTouchDistance = 0;
    this.lastTouchCenter = { x: 0, y: 0 };
    this.isPanning = false;
    this.isRotating = false;
    
    this.setupTouchListeners();
  }
  
  setupTouchListeners() {
    // Prevent default touch behaviors
    this.domElement.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: false });
    this.domElement.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: false });
    this.domElement.addEventListener('touchend', (e) => this.onTouchEnd(e), { passive: false });
    
    // Double tap detection for star selection
    this.lastTapTime = 0;
    this.lastTapPosition = { x: 0, y: 0 };
  }
  
  onTouchStart(event) {
    event.preventDefault();
    this.touches = Array.from(event.touches);
    
    // Disable OrbitControls built-in touch when we handle it
    if (this.touches.length === 1) {
      this.isRotating = true;
      this.controls.enableRotate = false; // We handle rotation manually
      
      // Detect double tap for star selection
      const now = Date.now();
      const touch = this.touches[0];
      const distance = Math.sqrt(
        Math.pow(touch.clientX - this.lastTapPosition.x, 2) +
        Math.pow(touch.clientY - this.lastTapPosition.y, 2)
      );
      
      if (now - this.lastTapTime < 300 && distance < 30) {
        this.onStarTap(touch.clientX, touch.clientY);
      }
      
      this.lastTapTime = now;
      this.lastTapPosition = { x: touch.clientX, y: touch.clientY };
      
    } else if (this.touches.length === 2) {
      this.isRotating = false;
      this.isPanning = true;
      this.controls.enableRotate = false;
      this.controls.enablePan = false; // We handle pan manually
      
      // Calculate initial distance and center
      this.lastTouchDistance = this.getTouchDistance();
      this.lastTouchCenter = this.getTouchCenter();
    }
    
    this.controls.enableZoom = false; // We handle zoom with pinch
  }
  
  onTouchMove(event) {
    event.preventDefault();
    this.touches = Array.from(event.touches);
    
    if (this.touches.length === 1 && this.isRotating) {
      // Single finger drag = rotate (orbit)
      const touch = this.touches[0];
      const deltaX = touch.clientX - this.lastTouchCenter.x;
      const deltaY = touch.clientY - this.lastTouchCenter.y;
      
      // Rotate camera around target
      const rotateSpeed = 0.005;
      this.controls.rotateLeft(deltaX * rotateSpeed);
      this.controls.rotateUp(deltaY * rotateSpeed);
      
      this.lastTouchCenter = { x: touch.clientX, y: touch.clientY };
      
    } else if (this.touches.length === 2) {
      // Two finger drag = pan
      if (this.isPanning) {
        const currentCenter = this.getTouchCenter();
        const deltaX = currentCenter.x - this.lastTouchCenter.x;
        const deltaY = currentCenter.y - this.lastTouchCenter.y;
        
        const panSpeed = 0.5;
        this.controls.pan(deltaX * panSpeed, deltaY * panSpeed);
        
        this.lastTouchCenter = currentCenter;
      }
      
      // Pinch = zoom
      const currentDistance = this.getTouchDistance();
      const delta = this.lastTouchDistance - currentDistance;
      
      if (Math.abs(delta) > 5) {
        const zoomSpeed = delta * 0.1;
        this.camera.position.addScaledVector(this.camera.getWorldDirection(new THREE.Vector3()), zoomSpeed);
        this.lastTouchDistance = currentDistance;
      }
    }
  }
  
  onTouchEnd(event) {
    this.touches = Array.from(event.touches);
    
    if (this.touches.length === 0) {
      // Reset all controls
      this.isRotating = false;
      this.isPanning = false;
      this.controls.enableRotate = true;
      this.controls.enablePan = true;
      this.controls.enableZoom = true;
      this.lastTouchCenter = { x: 0, y: 0 };
    } else if (this.touches.length === 1) {
      // Back to single finger rotate
      this.isPanning = false;
      this.isRotating = true;
      this.lastTouchCenter = { x: this.touches[0].clientX, y: this.touches[0].clientY };
    }
  }
  
  getTouchDistance() {
    if (this.touches.length < 2) return 0;
    const dx = this.touches[0].clientX - this.touches[1].clientX;
    const dy = this.touches[0].clientY - this.touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }
  
  getTouchCenter() {
    if (this.touches.length < 2) {
      return this.touches.length === 1 
        ? { x: this.touches[0].clientX, y: this.touches[0].clientY } 
        : { x: 0, y: 0 };
    }
    return {
      x: (this.touches[0].clientX + this.touches[1].clientX) / 2,
      y: (this.touches[0].clientY + this.touches[1].clientY) / 2
    };
  }
  
  onStarTap(x, y) {
    // Trigger star click for selection
    const mouse = new THREE.Vector2();
    mouse.x = (x / window.innerWidth) * 2 - 1;
    mouse.y = -(y / window.innerHeight) * 2 + 1;
    
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, this.camera);
    
    if (starField) {
      const intersects = raycaster.intersectObject(starField);
      
      if (intersects.length > 0) {
        const index = intersects[0].index;
        const positions = starField.geometry.attributes.position.array;
        const colors = starField.geometry.attributes.customColor.array;
        
        const color = new THREE.Color(colors[index * 3], colors[index * 3 + 1], colors[index * 3 + 2]);
        const posX = positions[index * 3].toFixed(2);
        const posY = positions[index * 3 + 1].toFixed(2);
        const posZ = positions[index * 3 + 2].toFixed(2);
        
        showNotification(`Star #${index} | Color: #${color.getHexString()} | Pos: (${posX}, ${posY}, ${posZ})`, 'info');
        
        // Play note if sound hunter is active
        if (window.soundHunterActive && audioEngine) {
          audioEngine.playStarNote(index, CONFIG.starCount);
        }
      }
    }
  }
}

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import * as Tone from 'tone';

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
  starCount: 50000,
  galaxyCount: 8,
  nebulaCount: 12,
  universeRadius: 5000,
  // Infinite generation settings
  chunkSize: 1000,        // Size of each chunk in world units
  renderDistance: MOBILE_CONFIG.isMobile ? 3 : 5,       // Number of chunks to render in each direction (reduced for mobile)
  starsPerChunk: MOBILE_CONFIG.isMobile ? 45 : 100,       // Stars per chunk (reduced for mobile: 40-50)
  galaxiesPerChunk: 0.02, // Chance of galaxy per chunk
  nebulaePerChunk: 0.015, // Chance of nebula per chunk
  colors: {
    primary: 0x00d4ff,
    secondary: 0xff00aa,
    accent: 0xffaa00,
    starColors: [
      0xffffff, 0xfff4e8, 0xffe4c4, 0xffd700,
      0xffa500, 0xff6b6b, 0x87ceeb, 0xadd8e6,
      0x0000ff, 0xff00ff, 0x00ffff
    ]
  }
};

// ============================================================================
// CHUNK SYSTEM FOR INFINITE UNIVERSE
// ============================================================================

// Seeded random number generator (Mulberry32)
function mulberry32(seed) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    let result = ((t ^ t >>> 14) >>> 0) / 4294967296;
    // Validate result is within bounds - NaN check
    if (isNaN(result) || !isFinite(result)) {
      return 0.5; // Safe fallback
    }
    // Clamp to valid range
    return Math.max(0, Math.min(1, result));
  };
}

// Generate a deterministic seed from chunk coordinates
function getChunkSeed(chunkX, chunkY, chunkZ) {
  // Use a combination of chunk coordinates to create unique seed
  const hash = chunkX * 73856093 ^ chunkY * 19349663 ^ chunkZ * 83492791;
  return Math.abs(hash);
}

// Chunk management system
class ChunkManager {
  constructor() {
    this.chunks = new Map(); // Map of "x,y,z" -> chunk data
    this.starField = null;
    this.galaxies = [];
    this.nebulae = [];
    this.lastPlayerChunk = null;
    this.needsUpdate = true;
  }

  // Get chunk key from coordinates
  getChunkKey(x, y, z) {
    const chunkX = Math.floor(x / CONFIG.chunkSize);
    const chunkY = Math.floor(y / CONFIG.chunkSize);
    const chunkZ = Math.floor(z / CONFIG.chunkSize);
    return `${chunkX},${chunkY},${chunkZ}`;
  }

  // Get chunk coordinates from world position
  getChunkCoords(x, y, z) {
    return {
      x: Math.floor(x / CONFIG.chunkSize),
      y: Math.floor(y / CONFIG.chunkSize),
      z: Math.floor(z / CONFIG.chunkSize)
    };
  }

  // Update chunks based on player position
  update(playerPosition) {
    const playerChunk = this.getChunkCoords(
      playerPosition.x,
      playerPosition.y,
      playerPosition.z
    );

    // Only update if player moved to a new chunk
    if (this.lastPlayerChunk &&
        this.lastPlayerChunk.x === playerChunk.x &&
        this.lastPlayerChunk.y === playerChunk.y &&
        this.lastPlayerChunk.z === playerChunk.z) {
      return;
    }

    this.lastPlayerChunk = playerChunk;
    this.needsUpdate = true;

    // Determine which chunks should be loaded
    const neededChunks = new Set();
    for (let x = -CONFIG.renderDistance; x <= CONFIG.renderDistance; x++) {
      for (let y = -CONFIG.renderDistance; y <= CONFIG.renderDistance; y++) {
        for (let z = -CONFIG.renderDistance; z <= CONFIG.renderDistance; z++) {
          const key = `${playerChunk.x + x},${playerChunk.y + y},${playerChunk.z + z}`;
          neededChunks.add(key);
        }
      }
    }

    // Remove chunks that are too far
    for (const [key, chunk] of this.chunks) {
      if (!neededChunks.has(key)) {
        // Remove from scene
        if (chunk.galaxy) {
          scene.remove(chunk.galaxy);
          const idx = this.galaxies.indexOf(chunk.galaxy);
          if (idx > -1) this.galaxies.splice(idx, 1);
        }
        if (chunk.nebula) {
          scene.remove(chunk.nebula);
          const idx = this.nebulae.indexOf(chunk.nebula);
          if (idx > -1) this.nebulae.splice(idx, 1);
        }
        this.chunks.delete(key);
      }
    }

    // Generate needed chunks
    for (const key of neededChunks) {
      if (!this.chunks.has(key)) {
        const [cx, cy, cz] = key.split(',').map(Number);
        this.generateChunk(cx, cy, cz);
      }
    }

    // Update star field positions
    this.updateStarField();
  }

  // Generate a single chunk
  generateChunk(chunkX, chunkY, chunkZ) {
    const seed = getChunkSeed(chunkX, chunkY, chunkZ);
    const random = mulberry32(seed);

    const chunk = {
      x: chunkX,
      y: chunkY,
      z: chunkZ,
      stars: [],
      galaxy: null,
      nebula: null
    };

    // Calculate chunk world position (center of chunk)
    const chunkWorldX = chunkX * CONFIG.chunkSize;
    const chunkWorldY = chunkY * CONFIG.chunkSize;
    const chunkWorldZ = chunkZ * CONFIG.chunkSize;

    // Generate stars for this chunk
    const starCount = Math.floor(CONFIG.starsPerChunk + random() * CONFIG.starsPerChunk);
    for (let i = 0; i < starCount; i++) {
      const starX = chunkWorldX + (random() - 0.5) * CONFIG.chunkSize;
      const starY = chunkWorldY + (random() - 0.5) * CONFIG.chunkSize;
      const starZ = chunkWorldZ + (random() - 0.5) * CONFIG.chunkSize;
      
      // Validate star positions to prevent NaN in BufferGeometry
      const validX = isFinite(starX) && !isNaN(starX) ? starX : chunkWorldX;
      const validY = isFinite(starY) && !isNaN(starY) ? starY : chunkWorldY;
      const validZ = isFinite(starZ) && !isNaN(starZ) ? starZ : chunkWorldZ;
      
      const starSize = random() * 3 + 1;
      const starBrightness = random() * 0.7 + 0.3;
      
      // Validate size and brightness
      chunk.stars.push({
        x: validX,
        y: validY,
        z: validZ,
        colorIndex: Math.floor(random() * CONFIG.colors.starColors.length),
        size: isFinite(starSize) && !isNaN(starSize) ? starSize : 1,
        brightness: isFinite(starBrightness) && !isNaN(starBrightness) ? starBrightness : 1
      });
    }

    // Maybe generate a galaxy
    if (random() < CONFIG.galaxiesPerChunk) {
      let galaxyX = chunkWorldX + (random() - 0.5) * CONFIG.chunkSize * 0.8;
      let galaxyY = chunkWorldY + (random() - 0.5) * CONFIG.chunkSize * 0.3;
      let galaxyZ = chunkWorldZ + (random() - 0.5) * CONFIG.chunkSize * 0.8;
      
      // Validate galaxy position to prevent NaN errors
      if (!isFinite(galaxyX) || !isFinite(galaxyY) || !isFinite(galaxyZ) ||
          isNaN(galaxyX) || isNaN(galaxyY) || isNaN(galaxyZ)) {
        galaxyX = chunkWorldX;
        galaxyY = chunkWorldY;
        galaxyZ = chunkWorldZ;
      }
      
      const galaxyPos = new THREE.Vector3(galaxyX, galaxyY, galaxyZ);
      const type = random() > 0.3 ? 'spiral' : 'elliptical';
      try {
        chunk.galaxy = createGalaxy(type, galaxyPos);
        scene.add(chunk.galaxy);
        this.galaxies.push(chunk.galaxy);
      } catch (e) {
        console.warn('Failed to create galaxy in chunk:', e);
      }
    }

    // Maybe generate a nebula
    if (random() < CONFIG.nebulaePerChunk) {
      let nebulaX = chunkWorldX + (random() - 0.5) * CONFIG.chunkSize * 0.8;
      let nebulaY = chunkWorldY + (random() - 0.5) * CONFIG.chunkSize * 0.3;
      let nebulaZ = chunkWorldZ + (random() - 0.5) * CONFIG.chunkSize * 0.8;
      
      // Validate nebula position to prevent NaN errors
      if (!isFinite(nebulaX) || !isFinite(nebulaY) || !isFinite(nebulaZ) ||
          isNaN(nebulaX) || isNaN(nebulaY) || isNaN(nebulaZ)) {
        nebulaX = chunkWorldX;
        nebulaY = chunkWorldY;
        nebulaZ = chunkWorldZ;
      }
      
      const nebulaPos = new THREE.Vector3(nebulaX, nebulaY, nebulaZ);
      try {
        chunk.nebula = createNebula(nebulaPos);
        scene.add(chunk.nebula);
        this.nebulae.push(chunk.nebula);
      } catch (e) {
        console.warn('Failed to create nebula in chunk:', e);
      }
    }

    this.chunks.set(`${chunkX},${chunkY},${chunkZ}`, chunk);
  }

  // Collect all stars from all chunks and create star field
  updateStarField() {
    // Remove old star field
    if (this.starField) {
      scene.remove(this.starField);
    }

    // Collect all stars with validation
    const allStars = [];
    let invalidCount = 0;
    for (const [key, chunk] of this.chunks) {
      for (const star of chunk.stars) {
        // Validate position values are valid numbers
        if (isNaN(star.x) || isNaN(star.y) || isNaN(star.z) ||
            !isFinite(star.x) || !isFinite(star.y) || !isFinite(star.z)) {
          invalidCount++;
          continue;
        }
        // Validate bounds are reasonable
        if (Math.abs(star.x) > 100000 || Math.abs(star.y) > 100000 || Math.abs(star.z) > 100000) {
          invalidCount++;
          continue;
        }
        allStars.push(star);
      }
    }

    if (invalidCount > 0) {
      console.warn(`Filtered ${invalidCount} invalid star positions`);
    }

    if (allStars.length === 0) return;

    // Create new star field
    const count = allStars.length;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const brightness = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const star = allStars[i];
      
      // Validate and sanitize position values to prevent NaN errors
      let x = star.x;
      let y = star.y;
      let z = star.z;
      
      if (!isFinite(x) || isNaN(x)) x = 0;
      if (!isFinite(y) || isNaN(y)) y = 0;
      if (!isFinite(z) || isNaN(z)) z = 0;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const colorHex = CONFIG.colors.starColors[star.colorIndex];
      const color = new THREE.Color(colorHex);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Validate size and brightness
      sizes[i] = isFinite(star.size) && !isNaN(star.size) ? star.size : 1;
      brightness[i] = isFinite(star.brightness) && !isNaN(star.brightness) ? star.brightness : 1;
    }

    const geometry = new THREE.BufferGeometry();
    
    // Additional validation - check for NaN in all positions before setting attribute
    for (let i = 0; i < positions.length; i++) {
      if (!isFinite(positions[i]) || isNaN(positions[i])) {
        console.warn(`Invalid position at index ${i}, setting to 0`);
        positions[i] = 0;
      }
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('brightness', new THREE.BufferAttribute(brightness, 1));

    // Compute bounding sphere with error handling to prevent NaN radius
    try {
      geometry.computeBoundingSphere();
      // Validate bounding sphere radius
      if (!geometry.boundingSphere || !isFinite(geometry.boundingSphere.radius) || isNaN(geometry.boundingSphere.radius)) {
        console.warn('Invalid bounding sphere in updateStarField, creating fallback');
        geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1000);
      }
    } catch (e) {
      console.warn('Bounding sphere computation failed in updateStarField:', e);
      geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1000);
    }

    const material = new THREE.ShaderMaterial({
      uniforms: {},
      vertexShader: starVertexShader,
      fragmentShader: starFragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.starField = new THREE.Points(geometry, material);
    scene.add(this.starField);
  }

  // Get all galaxies for animation
  getGalaxies() {
    return this.galaxies;
  }

  // Get all nebulae for animation
  getNebulae() {
    return this.nebulae;
  }

  // Get star field for interaction
  getStarField() {
    return this.starField;
  }
}

// ============================================================================
// GLOBAL STATE
// ============================================================================

let scene, camera, renderer, composer, controls;
let starField, galaxies = [], nebulae = [];
let clock = new THREE.Clock();
let chunkManager = null;
let audioEngine = null;
let timeMultiplier = 1;
let autoRotate = false;
let debugMode = false;
let mirrorUniverse = false;

// Keyboard movement state
const keyboardState = {
  forward: false,  // W / ArrowUp
  backward: false, // S / ArrowDown
  left: false,     // A / ArrowLeft
  right: false,    // D / ArrowRight
  up: false,      // Shift / E
  down: false      // Ctrl / Q
};

const MOVE_SPEED = 300; // Units per second

// Easter eggs state
const easterEggs = {
  constellationMaker: { unlocked: false, name: 'Constellation Maker', icon: '♈', description: 'Connect stars to create constellations' },
  timeTraveler: { unlocked: false, name: 'Time Traveler', icon: '⏰', description: 'Accelerate or reverse cosmic time' },
  messageInStars: { unlocked: false, name: 'Message in the Stars', icon: '💫', description: 'Hidden developer coordinates' },
  collector: { unlocked: false, name: 'The Collector', icon: '🖼️', description: 'Gallery of discovered galaxies' },
  soundHunter: { unlocked: false, name: 'Sound Hunter', icon: '🎵', description: 'Find musical stars for a symphony' },
  portal: { unlocked: false, name: 'The Portal', icon: '🌀', description: 'Access the mirror universe' },
  konamiCode: { unlocked: false, name: 'Debug Mode', icon: '🎮', description: 'Konami code activated' },
  birthdaySurprise: { unlocked: false, name: 'Birthday Surprise', icon: '🎂', description: 'Special galaxy on your birthday' }
};

// Konami code tracking
let konamiIndex = 0;
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

// ============================================================================
// SHADERS
// ============================================================================

// Star field vertex shader
const starVertexShader = `
  attribute float size;
  attribute vec3 customColor;
  attribute float brightness;
  
  varying vec3 vColor;
  varying float vBrightness;
  
  void main() {
    vColor = customColor;
    vBrightness = brightness;
    
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

// Star field fragment shader
const starFragmentShader = `
  varying vec3 vColor;
  varying float vBrightness;
  
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    
    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
    alpha *= vBrightness;
    
    vec3 glow = vColor * (1.0 + 0.5 * (1.0 - dist * 2.0));
    gl_FragColor = vec4(glow, alpha);
  }
`;

// Nebula vertex shader
const nebulaVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Nebula fragment shader
const nebulaFragmentShader = `
  uniform float time;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform float intensity;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  
  // Simplex noise function
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for (int i = 0; i < 5; i++) {
      value += amplitude * snoise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    
    return value;
  }
  
  void main() {
    vec3 pos = vPosition * 0.001 + time * 0.01;
    
    float n = fbm(pos);
    n = (n + 1.0) * 0.5;
    
    vec3 color = mix(color1, color2, n);
    
    float alpha = n * intensity;
    alpha *= smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.7, vUv.x);
    alpha *= smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y);
    
    gl_FragColor = vec4(color, alpha * 0.3);
  }
`;

// Chromatic aberration shader
const chromaticAberrationShader = {
  uniforms: {
    tDiffuse: { value: null },
    amount: { value: 0.003 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float amount;
    varying vec2 vUv;
    
    void main() {
      vec2 offset = amount * (vUv - 0.5);
      
      float r = texture2D(tDiffuse, vUv + offset).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, vUv - offset).b;
      
      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `
};

// ============================================================================
// AUDIO ENGINE
// ============================================================================

class AudioEngine {
  constructor() {
    this.initialized = false;
    this.muted = true;
    this.synths = [];
    this.masterGain = null;
    this.reverb = null;
    this.sequence = [];
  }

  async init() {
    if (this.initialized) return;
    
    await Tone.start();
    
    this.masterGain = new Tone.Gain(0.3).toDestination();
    this.reverb = new Tone.Reverb({ decay: 4, wet: 0.5 }).connect(this.masterGain);
    
    // Create ambient drone
    const drone = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'sine' },
      envelope: { attack: 2, decay: 1, sustain: 0.8, release: 3 }
    }).connect(this.reverb);
    
    drone.triggerAttack(['C2', 'G2', 'C3']);
    this.synths.push(drone);
    
    this.initialized = true;
  }

  playNote(frequency, duration = '8n', time = null) {
    if (!this.initialized || this.muted) return;
    
    const synth = new Tone.Synth({
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.01, decay: 0.1, sustain: 0.3, release: 0.5 }
    }).connect(this.reverb);
    
    synth.triggerAttackRelease(frequency, duration, time);
  }

  playStarNote(index, totalStars) {
    if (!this.initialized || this.muted) return;
    
    // Map star index to musical scale
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const octave = Math.floor(index / 7) + 3;
    const note = scale[index % 7];
    const frequency = Tone.Frequency(`${note}${octave}`).toFrequency();
    
    this.playNote(frequency, '16n');
  }

  setMuted(muted) {
    this.muted = muted;
    if (this.masterGain) {
      this.masterGain.gain.value = muted ? 0 : 0.3;
    }
  }

  toggle() {
    this.setMuted(!this.muted);
    return this.muted;
  }
}

// ============================================================================
// PROCEDURAL GENERATION
// ============================================================================

function createStarField(count) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const brightness = new Float32Array(count);
  
  const colorPalette = CONFIG.colors.starColors;
  
  for (let i = 0; i < count; i++) {
    // Distribute stars in a spherical volume with density falloff
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = Math.pow(Math.random(), 0.5) * CONFIG.universeRadius;
    
    let x = r * Math.sin(phi) * Math.cos(theta);
    let y = r * Math.sin(phi) * Math.sin(theta);
    let z = r * Math.cos(phi);
    
    // Validate and clamp positions to prevent NaN
    if (isNaN(x) || isNaN(y) || isNaN(z) || !isFinite(x) || !isFinite(y) || !isFinite(z)) {
      x = y = z = 0; // Fallback to center
    }
    
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    
    // Random star color from palette
    const colorHex = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    const color = new THREE.Color(colorHex);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
    
    // Random size and brightness
    sizes[i] = Math.random() * 3 + 1;
    brightness[i] = Math.random() * 0.7 + 0.3;
  }
  
  // Validate ALL positions before computing bounding sphere
  for (let i = 0; i < positions.length; i++) {
    if (!isFinite(positions[i]) || isNaN(positions[i])) {
      console.warn(`Invalid position at index ${i}, setting to 0`);
      positions[i] = 0;
    }
  }
  
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute('brightness', new THREE.BufferAttribute(brightness, 1));
  
  // Compute bounding sphere to prevent NaN radius errors
  try {
    geometry.computeBoundingSphere();
    // Validate bounding sphere radius
    if (!geometry.boundingSphere || !isFinite(geometry.boundingSphere.radius) || isNaN(geometry.boundingSphere.radius)) {
      console.warn('Invalid bounding sphere, creating fallback');
      geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1000);
    }
  } catch (e) {
    console.warn('Bounding sphere computation failed:', e);
    geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1000);
  }
  
  const material = new THREE.ShaderMaterial({
    uniforms: {},
    vertexShader: starVertexShader,
    fragmentShader: starFragmentShader,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  
  return new THREE.Points(geometry, material);
}

function createGalaxy(type = 'spiral', position = new THREE.Vector3()) {
  try {
    // Validate input position
    if (!position || isNaN(position.x) || isNaN(position.y) || isNaN(position.z) ||
        !isFinite(position.x) || !isFinite(position.y) || !isFinite(position.z)) {
      console.warn('Invalid galaxy position, using default');
      position = new THREE.Vector3();
    }
    
    const starCount = 5000 + Math.random() * 10000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    const brightness = new Float32Array(starCount);
    
    const galaxyColor = new THREE.Color();
    const hue = Math.random();
    galaxyColor.setHSL(hue, 0.8, 0.6);
    
    const coreColor = new THREE.Color();
    coreColor.setHSL(hue, 0.9, 0.8);
    
    const arms = type === 'spiral' ? Math.floor(Math.random() * 3) + 2 : 1;
    const armSpread = type === 'spiral' ? 0.5 + Math.random() * 0.5 : 2;
    const size = 100 + Math.random() * 200;
    
    for (let i = 0; i < starCount; i++) {
      let x, y, z;
      
      if (type === 'spiral') {
        // Spiral galaxy distribution
        const arm = Math.floor(Math.random() * arms);
        const armAngle = (arm / arms) * Math.PI * 2;
        const distance = Math.pow(Math.random(), 0.7) * size;
        const angle = armAngle + distance / size * Math.PI * armSpread + (Math.random() - 0.5) * 0.5;
        const spread = Math.random() * size * 0.3;
        
        x = Math.cos(angle) * distance + (Math.random() - 0.5) * spread;
        z = Math.sin(angle) * distance + (Math.random() - 0.5) * spread;
        y = (Math.random() - 0.5) * spread * 0.3;
      } else {
        // Elliptical galaxy
        const u = Math.random();
        const v = Math.random();
        const distance = size * Math.pow(u, 0.5);
        const angle = 2 * Math.PI * v;
        
        x = Math.cos(angle) * distance;
        z = Math.sin(angle) * distance;
        y = (Math.random() - 0.5) * distance * 0.5;
      }
      
      // Validate computed positions to prevent NaN
      if (!isFinite(x) || !isFinite(y) || !isFinite(z)) {
        x = 0; y = 0; z = 0;
      }
      
      positions[i * 3] = x + position.x;
      positions[i * 3 + 1] = y + position.y;
      positions[i * 3 + 2] = z + position.z;
      
      // Color based on distance from center
      const dist = Math.sqrt(x * x + z * z);
      const color = new THREE.Color().lerpColors(coreColor, galaxyColor, Math.min(dist / size, 1));
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      sizes[i] = Math.random() * 2 + 0.5;
      brightness[i] = Math.random() * 0.6 + 0.4;
    }
    
    const geometry = new THREE.BufferGeometry();
    
    // Validate all positions before setting attribute
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i]) || !isFinite(positions[i])) {
        positions[i] = 0; // Safe fallback
      }
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('brightness', new THREE.BufferAttribute(brightness, 1));
    
    // Compute bounding sphere with error handling
    try {
      geometry.computeBoundingSphere();
      // Validate bounding sphere radius
      if (!geometry.boundingSphere || !isFinite(geometry.boundingSphere.radius) || isNaN(geometry.boundingSphere.radius)) {
        // Set a default bounding sphere if computation fails
        geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), size * 3);
      }
    } catch (e) {
      console.warn('Bounding sphere computation failed:', e);
      geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), size * 3);
    }
    
    const material = new THREE.ShaderMaterial({
      uniforms: {},
      vertexShader: starVertexShader,
      fragmentShader: starFragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    
    const galaxy = new THREE.Points(geometry, material);
    galaxy.userData = {
      type,
      name: `Galaxy ${Math.floor(Math.random() * 9999)}`,
      discovered: false,
      position: position.clone()
    };
    
    return galaxy;
  } catch (error) {
    console.error('Error creating galaxy:', error);
    // Return a minimal valid galaxy as fallback
    const fallbackGeometry = new THREE.BufferGeometry();
    fallbackGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0]), 3));
    fallbackGeometry.setAttribute('customColor', new THREE.BufferAttribute(new Float32Array([1, 1, 1]), 3));
    fallbackGeometry.setAttribute('size', new Float32Array([1]));
    fallbackGeometry.setAttribute('brightness', new Float32Array([1]));
    const fallbackMaterial = new THREE.ShaderMaterial({
      vertexShader: starVertexShader,
      fragmentShader: starFragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    return new THREE.Points(fallbackGeometry, fallbackMaterial);
  }
}

function createNebula(position = new THREE.Vector3()) {
  try {
    // Validate input position
    if (!position || isNaN(position.x) || isNaN(position.y) || isNaN(position.z) ||
        !isFinite(position.x) || !isFinite(position.y) || !isFinite(position.z)) {
      console.warn('Invalid nebula position, using default');
      position = new THREE.Vector3();
    }
    
    const radius = 200 + Math.random() * 300;
    
    // Validate radius
    if (!isFinite(radius) || isNaN(radius) || radius <= 0) {
      console.warn('Invalid nebula radius, using default');
    }
    
    let geometry;
    try {
      geometry = new THREE.SphereGeometry(
        isFinite(radius) && !isNaN(radius) && radius > 0 ? radius : 250, 
        32, 
        32
      );
    } catch (e) {
      console.warn('SphereGeometry creation failed:', e);
      geometry = new THREE.SphereGeometry(250, 32, 32);
    }
    
    const color1 = new THREE.Color();
    const hue1 = isFinite(Math.random()) ? Math.random() : 0.5;
    color1.setHSL(hue1, 0.8, 0.5);
    
    const color2 = new THREE.Color();
    const hue2 = (hue1 + 0.3 + (isFinite(Math.random()) ? Math.random() : 0.5) * 0.4) % 1;
    color2.setHSL(hue2, 0.8, 0.5);
    
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: color1 },
        color2: { value: color2 },
        intensity: { value: 0.7 }
      },
      vertexShader: nebulaVertexShader,
      fragmentShader: nebulaFragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    
    const nebula = new THREE.Mesh(geometry, material);
    nebula.position.copy(position);
    nebula.userData = {
      name: `Nebula ${Math.floor(Math.random() * 9999)}`,
      baseIntensity: 0.7
    };
    
    return nebula;
  } catch (error) {
    console.error('Error creating nebula:', error);
    // Return a minimal valid nebula as fallback
    const fallbackGeometry = new THREE.SphereGeometry(250, 32, 32);
    const fallbackMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0xffffff) },
        color2: { value: new THREE.Color(0xffffff) },
        intensity: { value: 0.7 }
      },
      vertexShader: nebulaVertexShader,
      fragmentShader: nebulaFragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    return new THREE.Mesh(fallbackGeometry, fallbackMaterial);
  }
}

// ============================================================================
// EASTER EGGS
// ============================================================================

function activateEasterEgg(eggName) {
  switch (eggName) {
    case 'constellationMaker':
      activateConstellationMaker();
      break;
    case 'timeTraveler':
      activateTimeTraveler();
      break;
    case 'messageInStars':
      showMessageInStars();
      break;
    case 'collector':
      activateCollector();
      break;
    case 'soundHunter':
      activateSoundHunter();
      break;
    case 'portal':
      togglePortal();
      break;
    case 'birthdaySurprise':
      activateBirthdaySurprise();
      break;
  }
}

function activateConstellationMaker() {
  if (easterEggs.constellationMaker.unlocked) {
    showNotification('Constellation mode already active!', 'success');
    return;
  }
  
  easterEggs.constellationMaker.unlocked = true;
  showNotification('✨ Constellation Maker activated! Click stars to connect them.', 'secret');
  
  // Add constellation line material
  window.constellationMode = true;
  window.constellationLines = [];
  window.selectedStars = [];
}

function activateTimeTraveler() {
  easterEggs.timeTraveler.unlocked = true;
  showNotification('⏰ Time Traveler activated! Use the time controls.', 'secret');
}

function showMessageInStars() {
  easterEggs.messageInStars.unlocked = true;
  
  // Create hidden message in the stars
  const message = "42.7459°N, 74.0060°W - The developers";
  showNotification(`💫 SECRET: ${message}`, 'secret');
  
  // Highlight specific stars to spell message
  highlightMessageStars();
}

function highlightMessageStars() {
  // Create a special glowing effect at developer coordinates
  const markerGeometry = new THREE.SphereGeometry(5, 16, 16);
  const markerMaterial = new THREE.MeshBasicMaterial({ 
    color: 0xff00aa,
    transparent: true,
    opacity: 0.8
  });
  const marker = new THREE.Mesh(markerGeometry, markerMaterial);
  marker.position.set(42.7459 * 10, 0, -74.0060 * 10);
  scene.add(marker);
}

function activateCollector() {
  easterEggs.collector.unlocked = true;
  showNotification('🖼️ Collector activated! Gallery coming soon.', 'secret');
}

function activateSoundHunter() {
  easterEggs.soundHunter.unlocked = true;
  showNotification('🎵 Sound Hunter activated! Click stars to play notes.', 'secret');
  window.soundHunterActive = true;
}

function togglePortal() {
  easterEggs.portal.unlocked = true;
  mirrorUniverse = !mirrorUniverse;
  
  if (mirrorUniverse) {
    scene.background = new THREE.Color(0xffffff);
    document.body.style.filter = 'invert(1)';
    showNotification('🌀 Entered the Mirror Universe!', 'secret');
  } else {
    scene.background = new THREE.Color(0x000011);
    document.body.style.filter = 'none';
    showNotification('🌀 Returned to the normal universe.', 'secret');
  }
}

function activateBirthdaySurprise() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  
  // Check if today is a special date
  if (month === 3 && day === 22) {
    easterEggs.birthdaySurprise.unlocked = true;
    
    // Create special birthday galaxy
    const birthdayGalaxy = createGalaxy('spiral', new THREE.Vector3(500, 200, -500));
    birthdayGalaxy.userData.name = "🎂 Birthday Galaxy";
    birthdayGalaxy.userData.birthday = true;
    scene.add(birthdayGalaxy);
    galaxies.push(birthdayGalaxy);
    
    showNotification('🎂 HAPPY BIRTHDAY! A special galaxy has appeared!', 'success');
    
    // Trigger celebration
    if (audioEngine && !audioEngine.muted) {
      playBirthdayMelody();
    }
  } else {
    showNotification('🎂 No birthday today! Come back on March 22nd.', 'warning');
  }
}

function playBirthdayMelody() {
  const notes = ['C4', 'C4', 'D4', 'C4', 'F4', 'E4'];
  notes.forEach((note, i) => {
    setTimeout(() => {
      audioEngine.playNote(Tone.Frequency(note).toFrequency(), '8n');
    }, i * 300);
  });
}

function checkKonamiCode(key) {
  if (key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex >= konamiCode.length) {
      activateKonamiCode();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
}

function activateKonamiCode() {
  debugMode = true;
  easterEggs.konamiCode.unlocked = true;
  
  document.getElementById('debug-indicator').classList.add('visible');
  document.getElementById('stats').classList.add('visible');
  
  showNotification('🎮 DEBUG MODE ACTIVATED!', 'secret');
  
  // Enable debug features
  window.debugMode = true;
}

// ============================================================================
// UI FUNCTIONS
// ============================================================================

function showNotification(message, type = 'info') {
  const container = document.getElementById('notifications');
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  container.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function updateEasterEggPanel() {
  const list = document.getElementById('easter-eggs-list');
  list.innerHTML = '';
  
  Object.entries(easterEggs).forEach(([key, egg]) => {
    const item = document.createElement('div');
    item.className = `easter-item ${egg.unlocked ? '' : 'locked'}`;
    item.innerHTML = `
      <span class="easter-icon">${egg.icon}</span>
      <span class="easter-name">${egg.name}</span>
      <span class="easter-status">${egg.unlocked ? '✓' : '🔒'}</span>
    `;
    
    if (egg.unlocked) {
      item.addEventListener('click', () => activateEasterEgg(key));
    }
    
    list.appendChild(item);
  });
}

// ============================================================================
// INITIALIZATION
// ============================================================================

function init() {
  // Detect mobile device first
  detectMobileDevice();
  
  updateLoadingProgress(10, 'Creating universe...');
  
  // Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000011);
  // Enhanced fog for infinite universe - hides chunk boundaries seamlessly
  // Use heavier fog on mobile to reduce draw distance appearance
  const fogDensity = MOBILE_CONFIG.isMobile ? 0.00025 : 0.00015;
  scene.fog = new THREE.FogExp2(0x000011, fogDensity);
  
  updateLoadingProgress(20, 'Initializing camera...');
  
  // Camera - adjust FOV for mobile
  const fov = MOBILE_CONFIG.isMobile ? 85 : 75;
  camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.1, 10000);
  camera.position.set(0, 200, 500);
  
  updateLoadingProgress(30, 'Setting up renderer...');
  
  // Renderer - mobile optimized
  renderer = new THREE.WebGLRenderer({ 
    antialias: !MOBILE_CONFIG.isMobile, // Disable antialias on mobile
    powerPreference: MOBILE_CONFIG.isMobile ? 'low-performance' : 'high-performance',
    alpha: false
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // Use reduced pixel ratio on mobile for performance
  renderer.setPixelRatio(MOBILE_CONFIG.pixelRatio);
  
  // Handle high refresh rate displays on mobile
  if (MOBILE_CONFIG.isMobile) {
    renderer.setAnimationLoop(null);
  }
  
  document.getElementById('canvas-container').appendChild(renderer.domElement);
  
  updateLoadingProgress(40, 'Adding controls...');
  
  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = MOBILE_CONFIG.isMobile ? 20 : 50;
  controls.maxDistance = MOBILE_CONFIG.isMobile ? 1500 : 3000;
  controls.autoRotate = false;
  controls.autoRotateSpeed = 0.5;
  
  // Adjust controls for touch devices
  if (MOBILE_CONFIG.isTouch) {
    controls.rotateSpeed = 0.5;
    controls.panSpeed = 0.8;
    controls.zoomSpeed = 1.2;
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
  }
  
  // Keyboard movement controls
  document.addEventListener('keydown', (event) => {
    switch (event.code) {
      case 'KeyW':
      case 'ArrowUp':
        keyboardState.forward = true;
        break;
      case 'KeyS':
      case 'ArrowDown':
        keyboardState.backward = true;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        keyboardState.left = true;
        break;
      case 'KeyD':
      case 'ArrowRight':
        keyboardState.right = true;
        break;
      case 'KeyQ':
      case 'ControlLeft':
      case 'ControlRight':
        keyboardState.down = true;
        break;
      case 'KeyE':
      case 'ShiftLeft':
      case 'ShiftRight':
        keyboardState.up = true;
        break;
    }
  });
  
  document.addEventListener('keyup', (event) => {
    switch (event.code) {
      case 'KeyW':
      case 'ArrowUp':
        keyboardState.forward = false;
        break;
      case 'KeyS':
      case 'ArrowDown':
        keyboardState.backward = false;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        keyboardState.left = false;
        break;
      case 'KeyD':
      case 'ArrowRight':
        keyboardState.right = false;
        break;
      case 'KeyQ':
      case 'ControlLeft':
      case 'ControlRight':
        keyboardState.down = false;
        break;
      case 'KeyE':
      case 'ShiftLeft':
      case 'ShiftRight':
        keyboardState.up = false;
        break;
    }
  });
  
  updateLoadingProgress(50, 'Initializing infinite universe...');
  
  // Initialize chunk-based infinite universe system
  chunkManager = new ChunkManager();
  
  // Generate initial chunks around player position
  const initialChunkCoords = chunkManager.getChunkCoords(
    camera.position.x,
    camera.position.y,
    camera.position.z
  );
  
  // Generate chunks in a 3x3x3 area around the player
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        chunkManager.generateChunk(
          initialChunkCoords.x + x,
          initialChunkCoords.y + y,
          initialChunkCoords.z + z
        );
      }
    }
  }
  chunkManager.updateStarField();
  
  // Get references from chunk manager
  galaxies = chunkManager.getGalaxies();
  nebulae = chunkManager.getNebulae();
  starField = chunkManager.getStarField();
  
  // Update UI with star count
  let totalStars = 0;
  chunkManager.chunks.forEach(chunk => {
    totalStars += chunk.stars.length;
  });
  document.getElementById('star-count').textContent = `~${(totalStars * 10).toLocaleString()}`;
  
  updateLoadingProgress(70, 'Universe is infinite...');
  
  updateLoadingProgress(80, 'Applying effects...');
  
  // Post-processing (reduce or disable on mobile)
  composer = new EffectComposer(renderer);
  
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);
  
  // Only enable bloom on desktop or tablets, not on mobile phones
  const bloomStrength = MOBILE_CONFIG.isMobile ? 0.3 : 0.8;
  const bloomThreshold = MOBILE_CONFIG.isMobile ? 0.9 : 0.85;
  
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    bloomStrength,  // strength - reduced on mobile
    0.4,  // radius
    bloomThreshold  // threshold
  );
  composer.addPass(bloomPass);
  
  // Disable chromatic aberration on mobile for performance
  if (!MOBILE_CONFIG.isMobile) {
    const chromaticPass = new ShaderPass(chromaticAberrationShader);
    composer.addPass(chromaticPass);
    window.chromaticPass = chromaticPass;
  }
  
  // Store passes for later access
  window.bloomPass = bloomPass;
  
  updateLoadingProgress(90, 'Initializing audio...');
  
  // Initialize audio
  audioEngine = new AudioEngine();
  
  updateLoadingProgress(100, 'Ready!');
  
  // Event listeners
  setupEventListeners();
  
  // Hide loading screen
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
  }, 500);
  
  // Start animation
  animate();
  
  // Initialize touch controls if on touch device
  if (MOBILE_CONFIG.isTouch) {
    window.touchControls = new TouchControls(controls, camera, renderer.domElement);
  }
}

function updateLoadingProgress(percent, text) {
  document.getElementById('loader-progress').style.width = `${percent}%`;
  document.getElementById('loader-text').textContent = text;
}

function setupEventListeners() {
  // Window resize - also handle orientation change on mobile
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Update composer size
    if (composer) {
      composer.setSize(window.innerWidth, window.innerHeight);
    }
    
    // Adjust for orientation change
    if (window.orientation && Math.abs(window.orientation) === 90) {
      // Landscape mode - show notification
      document.body.classList.add('landscape');
    } else {
      document.body.classList.remove('landscape');
    }
  });
  
  // Handle orientation change specifically
  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      
      if (composer) {
        composer.setSize(window.innerWidth, window.innerHeight);
      }
    }, 100);
  });
  
  // Keyboard events for Konami code
  window.addEventListener('keydown', (e) => {
    checkKonamiCode(e.code);
    
    // Sound hunter - play note on key press
    if (window.soundHunterActive && audioEngine) {
      const freq = 200 + Math.random() * 800;
      audioEngine.playNote(freq, '32n');
    }
  });
  
  // Click events for star interaction
  renderer.domElement.addEventListener('click', onStarClick);
  
  // UI Controls
  document.getElementById('panel-toggle').addEventListener('click', () => {
    const panel = document.getElementById('control-panel');
    panel.classList.toggle('collapsed');
    document.getElementById('panel-toggle').textContent = panel.classList.contains('collapsed') ? '▶' : '◀';
  });
  
  // Time controls
  document.getElementById('time-speed').addEventListener('input', (e) => {
    timeMultiplier = parseFloat(e.target.value);
    document.getElementById('time-speed-value').textContent = `${timeMultiplier.toFixed(1)}x`;
  });
  
  document.getElementById('btn-time-forward').addEventListener('click', () => {
    timeMultiplier = Math.min(timeMultiplier + 1, 10);
    document.getElementById('time-speed').value = timeMultiplier;
    document.getElementById('time-speed-value').textContent = `${timeMultiplier.toFixed(1)}x`;
  });
  
  document.getElementById('btn-time-reverse').addEventListener('click', () => {
    timeMultiplier = Math.max(timeMultiplier - 1, -10);
    document.getElementById('time-speed').value = timeMultiplier;
    document.getElementById('time-speed-value').textContent = `${timeMultiplier.toFixed(1)}x`;
  });
  
  // Visual controls
  document.getElementById('star-density').addEventListener('input', (e) => {
    const density = parseInt(e.target.value);
    document.getElementById('star-density-value').textContent = `${density}K`;
    
    // Update stars per chunk in the infinite universe
    CONFIG.starsPerChunk = density * 2; // Scale proportionally
    
    // Regenerate all chunks with new density
    if (chunkManager) {
      const playerPos = camera.position.clone();
      
      // Clear existing chunks
      for (const [key, chunk] of chunkManager.chunks) {
        if (chunk.galaxy) scene.remove(chunk.galaxy);
        if (chunk.nebula) scene.remove(chunk.nebula);
      }
      chunkManager.chunks.clear();
      chunkManager.galaxies = [];
      chunkManager.nebulae = [];
      
      // Regenerate chunks around player
      const playerChunk = chunkManager.getChunkCoords(playerPos.x, playerPos.y, playerPos.z);
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          for (let z = -1; z <= 1; z++) {
            chunkManager.generateChunk(
              playerChunk.x + x,
              playerChunk.y + y,
              playerChunk.z + z
            );
          }
        }
      }
      chunkManager.updateStarField();
      
      // Update references
      galaxies = chunkManager.getGalaxies();
      nebulae = chunkManager.getNebulae();
      starField = chunkManager.getStarField();
      
      // Update UI
      let totalStars = 0;
      chunkManager.chunks.forEach(chunk => {
        totalStars += chunk.stars.length;
      });
      document.getElementById('star-count').textContent = `~${(totalStars * 10).toLocaleString()}`;
    }
  });
  
  document.getElementById('nebula-intensity').addEventListener('input', (e) => {
    const intensity = parseFloat(e.target.value);
    document.getElementById('nebula-intensity-value').textContent = intensity.toFixed(1);
    nebulae.forEach(nebula => {
      nebula.material.uniforms.intensity.value = intensity;
    });
  });
  
  document.getElementById('bloom').addEventListener('input', (e) => {
    const bloom = parseFloat(e.target.value);
    document.getElementById('bloom-value').textContent = bloom.toFixed(1);
    if (window.bloomPass) {
      window.bloomPass.strength = bloom;
    }
  });
  
  // Camera controls
  document.getElementById('btn-reset-camera').addEventListener('click', () => {
    camera.position.set(0, 200, 500);
    controls.target.set(0, 0, 0);
    controls.update();
  });
  
  document.getElementById('btn-auto-rotate').addEventListener('click', (e) => {
    autoRotate = !autoRotate;
    controls.autoRotate = autoRotate;
    e.target.classList.toggle('active', autoRotate);
  });
  
  // Easter eggs
  document.getElementById('btn-easter-eggs').addEventListener('click', () => {
    const panel = document.getElementById('easter-egg-panel');
    panel.classList.toggle('visible');
    updateEasterEggPanel();
  });
  
  // Audio toggle
  document.getElementById('audio-toggle').addEventListener('click', async () => {
    if (!audioEngine.initialized) {
      await audioEngine.init();
    }
    const muted = audioEngine.toggle();
    document.getElementById('audio-toggle').textContent = muted ? '🔇' : '🔊';
    document.getElementById('audio-toggle').classList.toggle('muted', muted);
  });
  
  // Star click handler
  function onStarClick(event) {
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    
    // Check for star field intersection
    const intersects = raycaster.intersectObject(starField);
    
    if (intersects.length > 0) {
      const index = intersects[0].index;
      const positions = starField.geometry.attributes.position.array;
      const colors = starField.geometry.attributes.customColor.array;
      
      // Show star info
      const color = new THREE.Color(colors[index * 3], colors[index * 3 + 1], colors[index * 3 + 2]);
      const x = positions[index * 3].toFixed(2);
      const y = positions[index * 3 + 1].toFixed(2);
      const z = positions[index * 3 + 2].toFixed(2);
      
      showNotification(`Star #${index} | Color: #${color.getHexString()} | Pos: (${x}, ${y}, ${z})`, 'info');
      
      // Play note if sound hunter is active
      if (window.soundHunterActive && audioEngine) {
        audioEngine.playStarNote(index, CONFIG.starCount);
      }
    }
  }
}

// ============================================================================
// ANIMATION LOOP
// ============================================================================

let lastTime = 0;
let frameCount = 0;
let fps = 60;

function animate() {
  requestAnimationFrame(animate);
  
  const delta = clock.getDelta();
  const elapsed = clock.getElapsedTime();
  
  // Update controls
  controls.update();
  
  // Apply keyboard movement
  if (keyboardState.forward || keyboardState.backward || keyboardState.left || keyboardState.right || keyboardState.up || keyboardState.down) {
    const moveDistance = MOVE_SPEED * delta;
    
    // Get camera direction vectors
    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();
    
    const right = new THREE.Vector3();
    right.crossVectors(forward, camera.up).normalize();
    
    // Apply movement relative to camera direction
    if (keyboardState.forward) {
      camera.position.addScaledVector(forward, moveDistance);
      controls.target.addScaledVector(forward, moveDistance);
    }
    if (keyboardState.backward) {
      camera.position.addScaledVector(forward, -moveDistance);
      controls.target.addScaledVector(forward, -moveDistance);
    }
    if (keyboardState.left) {
      camera.position.addScaledVector(right, -moveDistance);
      controls.target.addScaledVector(right, -moveDistance);
    }
    if (keyboardState.right) {
      camera.position.addScaledVector(right, moveDistance);
      controls.target.addScaledVector(right, moveDistance);
    }
    if (keyboardState.up) {
      camera.position.y += moveDistance;
      controls.target.y += moveDistance;
    }
    if (keyboardState.down) {
      camera.position.y -= moveDistance;
      controls.target.y -= moveDistance;
    }
  }
  
  // Update infinite universe - generate/remove chunks based on player position
  if (chunkManager) {
    chunkManager.update(camera.position);
    // Get updated references
    galaxies = chunkManager.getGalaxies();
    nebulae = chunkManager.getNebulae();
    starField = chunkManager.getStarField();
  }
  
  // Animate nebulae
  nebulae.forEach(nebula => {
    if (nebula.material && nebula.material.uniforms) {
      nebula.material.uniforms.time.value = elapsed * timeMultiplier;
    }
    nebula.rotation.y += 0.0001 * timeMultiplier;
  });
  
  // Rotate galaxies slowly
  galaxies.forEach(galaxy => {
    galaxy.rotation.y += 0.0002 * timeMultiplier;
  });
  
  // FPS counter
  frameCount++;
  if (elapsed - lastTime >= 1) {
    fps = frameCount;
    frameCount = 0;
    lastTime = elapsed;
    if (debugMode) {
      document.getElementById('fps').textContent = fps;
    }
  }
  
  // Render
  composer.render();
}

// ============================================================================
// START
// ============================================================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
