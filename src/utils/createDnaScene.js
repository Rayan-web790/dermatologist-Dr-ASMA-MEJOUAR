import * as THREE from 'three';

const createDnaScene = (canvas, options = {}) => {
  if (!canvas) {
    return () => {};
  }

  const {
    variant = 'hero',
    side = 'left',
    backgroundColor = 0x010817,
    accentColor = 0x4cc9f0,
    baseColor = 0x8ee0ff,
    particleColor = 0xbceaff,
  } = options;

  const geometries = [];
  const materials = [];
  const prefersReducedMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  const pixelRatio = Math.min(
    window.devicePixelRatio || 1,
    options.maxPixelRatio ?? (variant === 'side' ? 1.2 : 1.6)
  );
  renderer.setPixelRatio(pixelRatio);

  const scene = new THREE.Scene();
  const fogDensity = options.fogDensity ?? (variant === 'side' ? 0.12 : 0.08);
  scene.fog = new THREE.FogExp2(backgroundColor, fogDensity);

  const camera = new THREE.PerspectiveCamera(
    options.fov ?? (variant === 'side' ? 35 : 40),
    1,
    0.1,
    80
  );
  const cameraZ = options.cameraZ ?? (variant === 'side' ? 4.2 : 6);
  const cameraY = options.cameraY ?? (variant === 'side' ? 0.15 : 1.1);
  camera.position.set(0, cameraY, cameraZ);

  const resizeRenderer = () => {
    const rect = canvas.getBoundingClientRect();
    const width = rect.width || canvas.parentElement?.clientWidth || 100;
    const height = rect.height || canvas.parentElement?.clientHeight || 100;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  resizeRenderer();

  const ambient = new THREE.AmbientLight(0x9acbff, 0.55);
  scene.add(ambient);

  const pointLight = new THREE.PointLight(accentColor, variant === 'side' ? 1.3 : 1.8, 20, 2);
  pointLight.position.set(side === 'right' ? 2 : -2, 2, 3);
  scene.add(pointLight);

  const dnaGroup = new THREE.Group();
  scene.add(dnaGroup);

  const turns = options.turns ?? (variant === 'side' ? 14 : 18);
  const height = options.height ?? (variant === 'side' ? 5.5 : 4.6);
  const radius = options.radius ?? (variant === 'side' ? 0.25 : 0.38);
  const segments = options.segments ?? 520;
  const particleCount = options.particleCount ?? (variant === 'side' ? 900 : 1800);

  const makeStrand = (phase = 0) => {
    const positions = new Float32Array((segments + 1) * 3);
    for (let i = 0; i <= segments; i += 1) {
      const progress = i / segments;
      const t = progress * turns * Math.PI * 2;
      positions[i * 3] = Math.cos(t + phase) * radius;
      positions[i * 3 + 1] = (progress - 0.5) * height;
      positions[i * 3 + 2] = Math.sin(t + phase) * radius;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.LineBasicMaterial({
      color: baseColor,
      transparent: true,
      opacity: variant === 'side' ? 0.65 : 0.9,
    });
    geometries.push(geometry);
    materials.push(material);
    return new THREE.Line(geometry, material);
  };

  dnaGroup.add(makeStrand(0));
  dnaGroup.add(makeStrand(Math.PI));

  const rungMaterial = new THREE.LineBasicMaterial({
    color: 0x64f0ff,
    transparent: true,
    opacity: 0.4,
  });
  materials.push(rungMaterial);

  for (let i = 0; i <= segments; i += 18) {
    const progress = i / segments;
    const t = progress * turns * Math.PI * 2;
    const y = (progress - 0.5) * height;
    const start = new THREE.Vector3(Math.cos(t) * radius, y, Math.sin(t) * radius);
    const end = new THREE.Vector3(Math.cos(t + Math.PI) * radius, y, Math.sin(t + Math.PI) * radius);
    const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
    geometries.push(geometry);
    const line = new THREE.Line(geometry, rungMaterial);
    dnaGroup.add(line);
  }

  const orbGeometry = new THREE.SphereGeometry(variant === 'side' ? 0.05 : 0.08, 16, 16);
  geometries.push(orbGeometry);
  const orbMaterial = new THREE.MeshStandardMaterial({
    color: accentColor,
    emissive: accentColor,
    emissiveIntensity: 0.8,
    metalness: 0.4,
    roughness: 0.25,
  });
  materials.push(orbMaterial);

  for (let i = 0; i < turns * 2; i += 1) {
    const progress = i / (turns * 2);
    const t = progress * turns * Math.PI * 2;
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    orb.position.set(Math.cos(t) * radius, (progress - 0.5) * height, Math.sin(t) * radius);
    dnaGroup.add(orb);
  }

  const particleGeometry = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const basePositions = new Float32Array(particleCount * 3);
  const offsets = new Float32Array(particleCount);

  const innerRadius = radius + 0.8;
  const outerRadius = variant === 'side' ? 3.2 : 4.5;

  for (let i = 0; i < particleCount; i += 1) {
    const theta = Math.random() * Math.PI * 2;
    const radial = innerRadius + Math.random() * (outerRadius - innerRadius);
    const y = (Math.random() - 0.5) * height * 1.2;
    const x = Math.cos(theta) * radial;
    const z = Math.sin(theta) * radial;
    particlePositions.set([x, y, z], i * 3);
    basePositions.set([x, y, z], i * 3);
    offsets[i] = Math.random() * Math.PI * 2;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  const particleMaterial = new THREE.PointsMaterial({
    color: particleColor,
    size: variant === 'side' ? 0.025 : 0.05,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
  });
  geometries.push(particleGeometry);
  materials.push(particleMaterial);

  const particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  const clock = new THREE.Clock();
  let animationFrame;

  const animate = () => {
    animationFrame = requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();
    const rotationSpeed = prefersReducedMotion
      ? 0.05
      : variant === 'side'
      ? 0.12
      : 0.22;

    dnaGroup.rotation.y = elapsed * rotationSpeed;
    dnaGroup.rotation.x = Math.sin(elapsed * 0.3) * (prefersReducedMotion ? 0.03 : 0.08);

    const posAttr = particleGeometry.getAttribute('position');
    for (let i = 0; i < particleCount; i += 1) {
      const baseY = basePositions[i * 3 + 1];
      const offset = Math.sin(elapsed * 0.6 + offsets[i]) * 0.08;
      posAttr.setY(i, baseY + offset);
    }
    posAttr.needsUpdate = true;

    pointLight.position.x = Math.sin(elapsed * 0.7) * (variant === 'side' ? 1.2 : 2);
    renderer.render(scene, camera);
  };

  animate();

  const resizeObserver = window.ResizeObserver
    ? new window.ResizeObserver(() => resizeRenderer())
    : null;

  if (resizeObserver) {
    resizeObserver.observe(canvas);
  }

  window.addEventListener('resize', resizeRenderer);

  return () => {
    cancelAnimationFrame(animationFrame);
    window.removeEventListener('resize', resizeRenderer);
    if (resizeObserver) {
      resizeObserver.disconnect();
    }
    renderer.dispose();

    geometries.forEach((geometry) => geometry.dispose());
    materials.forEach((material) => {
      if (material.dispose) {
        material.dispose();
      }
    });
  };
};

export default createDnaScene;

