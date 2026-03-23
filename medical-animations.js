(function () {
  const SECTION_SELECTOR = '.medical-3d-banner';

  if (typeof window === 'undefined') {
    return;
  }

  function warnMissingThree() {
    console.warn(
      'THREE.js n’est pas disponible. Les animations 3D médicales ne seront pas affichées.'
    );
  }

  class Medical3DAnimation {
    constructor(container) {
      this.container = container;
      this.canvasHost = container.querySelector('.medical-3d-canvas');
      this.variant = container.getAttribute('data-animation') || 'cells';

      if (!this.canvasHost) {
        return;
      }

      this.scene = new THREE.Scene();
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.canvasHost.appendChild(this.renderer.domElement);

      this.camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
      this.camera.position.set(0, 0, 8);

      this.clock = new THREE.Clock();
      this.mixers = [];

      this.setupLights();
      this.addCoreObjects();
      this.addParticles();

      this.handleResize = this.handleResize.bind(this);
      this.animate = this.animate.bind(this);

      this.handleResize();
      window.addEventListener('resize', this.handleResize);
      this.animate();
    }

    setupLights() {
      const ambient = new THREE.AmbientLight(0xffffff, 0.55);
      const rimLight = new THREE.DirectionalLight(0x6fb1ff, 0.8);
      rimLight.position.set(5, 6, 8);
      const fillLight = new THREE.PointLight(0x82e9ff, 1.1, 25, 2);
      fillLight.position.set(-6, -2, 4);
      this.scene.add(ambient, rimLight, fillLight);
    }

    addCoreObjects() {
      const palette = this.getPalette();
      const torusGeometry = new THREE.TorusKnotGeometry(1.25, 0.35, 200, 24);
      const torusMaterial = new THREE.MeshStandardMaterial({
        color: palette.primary,
        emissive: palette.emissive,
        metalness: 0.45,
        roughness: 0.2
      });
      this.torus = new THREE.Mesh(torusGeometry, torusMaterial);
      this.scene.add(this.torus);

      const sphereGeometry = new THREE.SphereGeometry(0.45, 32, 32);
      const sphereMaterial = new THREE.MeshPhysicalMaterial({
        color: palette.highlight,
        transparent: true,
        opacity: 0.8,
        roughness: 0.1,
        metalness: 0.8,
        transmission: 0.5
      });

      this.spheres = [];
      for (let i = 0; i < 4; i += 1) {
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(Math.sin(i) * 2.2, Math.cos(i * 1.3) * 1.4, -i * 0.4);
        this.scene.add(sphere);
        this.spheres.push(sphere);
      }
    }

    addParticles() {
      const palette = this.getPalette();
      const particles = 1200;
      const positions = new Float32Array(particles * 3);
      const sizes = new Float32Array(particles);

      for (let i = 0; i < particles; i += 1) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 3 + 1;
        const height = (Math.random() - 0.5) * 4;

        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = height;
        positions[i * 3 + 2] = Math.sin(angle) * radius;

        sizes[i] = Math.random() * 1.5 + 0.5;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.PointsMaterial({
        color: palette.particles,
        size: 0.06,
        transparent: true,
        opacity: 0.85,
        sizeAttenuation: true
      });

      this.particles = new THREE.Points(geometry, material);
      this.scene.add(this.particles);
    }

    getPalette() {
      const palettes = {
        diagnostic: {
          primary: 0x8ac8ff,
          particles: 0xd4f1ff,
          highlight: 0x9bf6ff,
          emissive: 0x0d47a1
        },
        lasers: {
          primary: 0x5ce1ff,
          particles: 0xfff6e9,
          highlight: 0xffffff,
          emissive: 0x0b3d91
        },
        contact: {
          primary: 0x7bffd9,
          particles: 0xc2fff3,
          highlight: 0xffffff,
          emissive: 0x0f4a8a
        },
        faq: {
          primary: 0x9ac4ff,
          particles: 0xf4f8ff,
          highlight: 0xffffff,
          emissive: 0x0d47a1
        },
        default: {
          primary: 0x7ecbff,
          particles: 0xe1f2ff,
          highlight: 0xffffff,
          emissive: 0x0a4a92
        }
      };
      return palettes[this.variant] || palettes.default;
    }

    handleResize() {
      const { width, height } = this.canvasHost.getBoundingClientRect();
      this.renderer.setSize(width, height);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }

    animate() {
      this.frame = requestAnimationFrame(this.animate);
      const elapsed = this.clock.getElapsedTime();

      if (this.torus) {
        this.torus.rotation.x = elapsed * 0.3;
        this.torus.rotation.y = elapsed * 0.25;
      }

      if (this.spheres) {
        this.spheres.forEach((sphere, idx) => {
          sphere.position.x = Math.sin(elapsed * 0.6 + idx) * 2.1;
          sphere.position.y = Math.cos(elapsed * 0.4 + idx * 0.5) * 1.3;
          sphere.position.z = Math.sin(elapsed * 0.5 + idx) * 0.5;
        });
      }

      if (this.particles) {
        this.particles.rotation.y = elapsed * 0.08;
        this.particles.rotation.x = Math.sin(elapsed * 0.05) * 0.05;
      }

      this.renderer.render(this.scene, this.camera);
    }

    destroy() {
      cancelAnimationFrame(this.frame);
      window.removeEventListener('resize', this.handleResize);
      this.renderer.dispose();
    }
  }

  function initMedicalAnimations() {
    if (!window.THREE) {
      warnMissingThree();
      return;
    }

    // Performance Optimization: Disable heavy 3D on mobile
    if (window.innerWidth < 768) {
      console.log('Mobile device detected: 3D animations disabled for premium performance.');
      return;
    }

    document.querySelectorAll(SECTION_SELECTOR).forEach((section) => {
      if (!section.dataset.initialized) {
        section.dataset.initialized = 'true';
        section.__medicalAnimation = new Medical3DAnimation(section);
      }
    });
  }

  if (document.readyState !== 'loading') {
    initMedicalAnimations();
  } else {
    document.addEventListener('DOMContentLoaded', initMedicalAnimations);
  }
})();

