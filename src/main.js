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
 */

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
// GLOBAL STATE
// ============================================================================

let scene, camera, renderer, composer, controls;
let starField, galaxies = [], nebulae = [];
let clock = new THREE.Clock();
let audioEngine = null;
let timeMultiplier = 1;
let autoRotate = false;
let debugMode = false;
let mirrorUniverse = false;

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
    
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
    
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
  
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute('brightness', new THREE.BufferAttribute(brightness, 1));
  
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
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute('brightness', new THREE.BufferAttribute(brightness, 1));
  
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
}

function createNebula(position = new THREE.Vector3()) {
  const geometry = new THREE.SphereGeometry(200 + Math.random() * 300, 32, 32);
  
  const color1 = new THREE.Color();
  const hue1 = Math.random();
  color1.setHSL(hue1, 0.8, 0.5);
  
  const color2 = new THREE.Color();
  const hue2 = (hue1 + 0.3 + Math.random() * 0.4) % 1;
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
  updateLoadingProgress(10, 'Creating universe...');
  
  // Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000011);
  scene.fog = new THREE.FogExp2(0x000011, 0.0001);
  
  updateLoadingProgress(20, 'Initializing camera...');
  
  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
  camera.position.set(0, 200, 500);
  
  updateLoadingProgress(30, 'Setting up renderer...');
  
  // Renderer
  renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  document.getElementById('canvas-container').appendChild(renderer.domElement);
  
  updateLoadingProgress(40, 'Adding controls...');
  
  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 50;
  controls.maxDistance = 3000;
  controls.autoRotate = false;
  controls.autoRotateSpeed = 0.5;
  
  updateLoadingProgress(50, 'Generating stars...');
  
  // Create star field
  starField = createStarField(CONFIG.starCount);
  scene.add(starField);
  document.getElementById('star-count').textContent = CONFIG.starCount.toLocaleString();
  
  updateLoadingProgress(60, 'Creating galaxies...');
  
  // Create galaxies
  for (let i = 0; i < CONFIG.galaxyCount; i++) {
    const position = new THREE.Vector3(
      (Math.random() - 0.5) * CONFIG.universeRadius * 0.8,
      (Math.random() - 0.5) * CONFIG.universeRadius * 0.2,
      (Math.random() - 0.5) * CONFIG.universeRadius * 0.8
    );
    const type = Math.random() > 0.3 ? 'spiral' : 'elliptical';
    const galaxy = createGalaxy(type, position);
    scene.add(galaxy);
    galaxies.push(galaxy);
  }
  
  updateLoadingProgress(70, 'Forming nebulae...');
  
  // Create nebulae
  for (let i = 0; i < CONFIG.nebulaCount; i++) {
    const position = new THREE.Vector3(
      (Math.random() - 0.5) * CONFIG.universeRadius * 0.6,
      (Math.random() - 0.5) * CONFIG.universeRadius * 0.3,
      (Math.random() - 0.5) * CONFIG.universeRadius * 0.6
    );
    const nebula = createNebula(position);
    scene.add(nebula);
    nebulae.push(nebula);
  }
  
  updateLoadingProgress(80, 'Applying effects...');
  
  // Post-processing
  composer = new EffectComposer(renderer);
  
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);
  
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.8,  // strength
    0.4,  // radius
    0.85  // threshold
  );
  composer.addPass(bloomPass);
  
  const chromaticPass = new ShaderPass(chromaticAberrationShader);
  composer.addPass(chromaticPass);
  
  // Store passes for later access
  window.bloomPass = bloomPass;
  window.chromaticPass = chromaticPass;
  
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
}

function updateLoadingProgress(percent, text) {
  document.getElementById('loader-progress').style.width = `${percent}%`;
  document.getElementById('loader-text').textContent = text;
}

function setupEventListeners() {
  // Window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
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
    
    // Regenerate star field with new density
    const newCount = density * 1000;
    scene.remove(starField);
    starField = createStarField(newCount);
    scene.add(starField);
    CONFIG.starCount = newCount;
    document.getElementById('star-count').textContent = newCount.toLocaleString();
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
  
  // Animate nebulae
  nebulae.forEach(nebula => {
    nebula.material.uniforms.time.value = elapsed * timeMultiplier;
    nebula.rotation.y += 0.0001 * timeMultiplier;
  });
  
  // Rotate galaxies slowly
  galaxies.forEach(galaxy => {
    galaxy.rotation.y += 0.0002 * timeMultiplier;
  });
  
  // Subtle star field animation
  if (starField) {
    starField.rotation.y += 0.00005 * timeMultiplier;
  }
  
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
