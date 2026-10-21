import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function TechGlobe3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    isDragging: false,
    prevX: 0,
    prevY: 0,
    dragRotX: 0,
    dragRotY: 0,
    rotAccelY: 0,
    rotAccelX: 0,
    lastMoveTime: 0,
  });

  const zoomRef = useRef({
    current: 1.0,
    target: 1.0,
    wheelZoom: 0,
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions based on mount container
    const width = container.clientWidth || 560;
    const height = container.clientHeight || 560;

    // Sphere parameters
    const innerRadius = 78;

    // Scene & Perspective Camera with calibrated FOV
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

    // Responsive camera Z positioning:
    // Keeps the 3D globe sphere at ~375px on screen while providing enough
    // frustum width & height so outer orbital gimbal rings (radius 111) and satellites (radius 108)
    // NEVER get cut off by the canvas edges, floating seamlessly in the hero background.
    const computeCameraZ = (w: number, h: number) => {
      const minDim = Math.min(w, h);
      const targetGlobePixels = minDim < 420 ? minDim * 0.58 : 375;
      const targetFraction = Math.min(targetGlobePixels / minDim, 0.65);
      const visibleWorldHeight = (innerRadius * 2) / targetFraction;
      const fovRad = (camera.fov * Math.PI) / 360;
      return visibleWorldHeight / (2 * Math.tan(fovRad));
    };

    camera.position.z = computeCameraZ(width, height);

    // High performance WebGL renderer with alpha transparency for seamless hero blending
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.background = 'transparent';
    renderer.domElement.style.touchAction = 'pan-y';
    container.appendChild(renderer.domElement);

    // Root Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Inner Core Glowing Wireframe Sphere
    const wireframeGeo = new THREE.IcosahedronGeometry(innerRadius, 3);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x1d4ed8,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const innerSphere = new THREE.Mesh(wireframeGeo, wireframeMat);
    globeGroup.add(innerSphere);

    // 2. Latitude & Longitude Ring Lines
    const ringMat = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.45,
    });
    const latLineGeos: THREE.BufferGeometry[] = [];
    for (let i = -4; i <= 4; i++) {
      const lat = (i * Math.PI) / 10;
      const r = innerRadius * Math.cos(lat);
      const y = innerRadius * Math.sin(lat);
      const circleGeo = new THREE.BufferGeometry();
      const points: THREE.Vector3[] = [];
      const segments = 54;
      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(r * Math.cos(theta), y, r * Math.sin(theta)));
      }
      circleGeo.setFromPoints(points);
      latLineGeos.push(circleGeo);
      const latLine = new THREE.Line(circleGeo, ringMat);
      globeGroup.add(latLine);
    }

    // 3. Tech Node Dots on Sphere Surface (Fibonacci Sphere Distribution)
    const nodeCount = 380;
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);
    const primaryColor = new THREE.Color(0x38bdf8); // Sky blue
    const accentColor = new THREE.Color(0x818cf8);  // Indigo
    const highlightColor = new THREE.Color(0x60a5fa); // Bright blue
    const nodeVecs: THREE.Vector3[] = [];

    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio
    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const px = x * innerRadius;
      const py = y * innerRadius;
      const pz = z * innerRadius;

      nodePositions[i * 3] = px;
      nodePositions[i * 3 + 1] = py;
      nodePositions[i * 3 + 2] = pz;

      nodeVecs.push(new THREE.Vector3(px, py, pz));

      const rand = Math.random();
      const c = rand > 0.6 ? highlightColor : rand > 0.3 ? primaryColor : accentColor;
      nodeColors[i * 3] = c.r;
      nodeColors[i * 3 + 1] = c.g;
      nodeColors[i * 3 + 2] = c.b;
    }

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeo.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3));

    const nodeMat = new THREE.PointsMaterial({
      size: 3.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });
    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    globeGroup.add(nodePoints);

    // 4. Global Curved Data Arcs Between Tech Nodes
    const arcLinesGroup = new THREE.Group();
    globeGroup.add(arcLinesGroup);

    const arcGeos: THREE.BufferGeometry[] = [];
    const arcMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65,
    });

    const createArc = (p1: THREE.Vector3, p2: THREE.Vector3) => {
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      const dist = p1.distanceTo(p2);
      mid.normalize().multiplyScalar(innerRadius + dist * 0.32);

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const points = curve.getPoints(24);
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      arcGeos.push(geo);
      return new THREE.Line(geo, arcMat);
    };

    // Generate 12 distinct tech arcs across the globe
    for (let k = 0; k < 12; k++) {
      const idx1 = Math.floor(Math.random() * nodeVecs.length);
      const idx2 = (idx1 + Math.floor(Math.random() * 80) + 40) % nodeVecs.length;
      const arc = createArc(nodeVecs[idx1], nodeVecs[idx2]);
      arcLinesGroup.add(arc);
    }

    // 5. Outer Concentric Tech Gimbal Rings (Gimbal rings stay 100% visible)
    const ring1Geo = new THREE.RingGeometry(96, 97.4, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
    const outerRing1 = new THREE.Mesh(ring1Geo, ring1Mat);
    outerRing1.rotation.x = Math.PI / 2.8;
    globeGroup.add(outerRing1);

    const ring2Geo = new THREE.RingGeometry(110, 111.2, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x818cf8, side: THREE.DoubleSide, transparent: true, opacity: 0.28 });
    const outerRing2 = new THREE.Mesh(ring2Geo, ring2Mat);
    outerRing2.rotation.x = -Math.PI / 3.4;
    outerRing2.rotation.y = Math.PI / 6;
    globeGroup.add(outerRing2);

    // 6. Orbital Satellite Beacon
    const satelliteGeo = new THREE.SphereGeometry(2.8, 12, 12);
    const satelliteMat = new THREE.MeshBasicMaterial({ color: 0x67e8f9 });
    const satellite = new THREE.Mesh(satelliteGeo, satelliteMat);
    scene.add(satellite);

    // Mouse tracking with rotation acceleration
    let lastClientX = 0;
    let lastClientY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const winX = (e.clientX / window.innerWidth) - 0.5;
      const winY = (e.clientY / window.innerHeight) - 0.5;

      const rect = container.getBoundingClientRect();
      const inContainerX = (e.clientX - rect.left) / rect.width - 0.5;
      const inContainerY = (e.clientY - rect.top) / rect.height - 0.5;

      const isNearContainer =
        e.clientX >= rect.left - 150 &&
        e.clientX <= rect.right + 150 &&
        e.clientY >= rect.top - 150 &&
        e.clientY <= rect.bottom + 150;

      if (isNearContainer) {
        mouseRef.current.targetX = inContainerX * 1.8;
        mouseRef.current.targetY = inContainerY * 1.8;
      } else {
        mouseRef.current.targetX = winX * 1.2;
        mouseRef.current.targetY = winY * 1.2;
      }

      // Mouse-follow rotation acceleration
      if (lastClientX !== 0 || lastClientY !== 0) {
        const deltaX = e.clientX - lastClientX;
        const deltaY = e.clientY - lastClientY;
        
        // Boost acceleration impulse based on swipe velocity
        mouseRef.current.rotAccelY += deltaX * 0.00045;
        mouseRef.current.rotAccelX += deltaY * 0.00025;
        
        // Clamp maximum acceleration impulse to prevent disorienting spin
        mouseRef.current.rotAccelY = THREE.MathUtils.clamp(mouseRef.current.rotAccelY, -0.06, 0.06);
        mouseRef.current.rotAccelX = THREE.MathUtils.clamp(mouseRef.current.rotAccelX, -0.04, 0.04);
      }
      lastClientX = e.clientX;
      lastClientY = e.clientY;

      if (mouseRef.current.isDragging) {
        const dx = e.clientX - mouseRef.current.prevX;
        const dy = e.clientY - mouseRef.current.prevY;
        mouseRef.current.dragRotY += dx * 0.008;
        mouseRef.current.dragRotX += dy * 0.008;
        mouseRef.current.prevX = e.clientX;
        mouseRef.current.prevY = e.clientY;
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      mouseRef.current.isDragging = true;
      mouseRef.current.prevX = e.clientX;
      mouseRef.current.prevY = e.clientY;
    };

    const onMouseUp = () => {
      mouseRef.current.isDragging = false;
    };

    // Scroll-linked zoom handling
    const updateScrollZoom = () => {
      const scrollY = window.scrollY || 0;
      // As user scrolls down in hero section (0 -> 700px), apply subtle zoom (1.0 -> 1.14)
      const scrollProgress = Math.min(Math.max(scrollY / 600, 0), 1);
      zoomRef.current.target = 1.0 + scrollProgress * 0.14 + zoomRef.current.wheelZoom;
    };

    const onWheel = (e: WheelEvent) => {
      // Subtle reactive zoom impulse on mouse wheel over container
      zoomRef.current.wheelZoom = THREE.MathUtils.clamp(
        zoomRef.current.wheelZoom - e.deltaY * 0.0003,
        -0.08,
        0.12
      );
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('scroll', updateScrollZoom, { passive: true });
    container.addEventListener('wheel', onWheel, { passive: true });
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Resize handler keeping camera frustum calibrated
    const onResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 560;
      const newH = container.clientHeight || 560;
      camera.aspect = newW / newH;
      camera.position.z = computeCameraZ(newW, newH);
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Exponential damping toward cursor target
      mouseRef.current.x = THREE.MathUtils.damp(mouseRef.current.x, mouseRef.current.targetX, 4, delta);
      mouseRef.current.y = THREE.MathUtils.damp(mouseRef.current.y, mouseRef.current.targetY, 4, delta);

      // Mouse-follow rotation acceleration + continuous directional bias
      // Mouse position pulls rotation speed smoothly in cursor direction
      const mouseSpeedBias = mouseRef.current.x * 0.45;
      const totalRotationSpeed = delta * (0.22 + mouseSpeedBias) + mouseRef.current.rotAccelY;
      mouseRef.current.dragRotY += totalRotationSpeed;

      // Dampen rotation acceleration impulse back to resting speed
      mouseRef.current.rotAccelY = THREE.MathUtils.damp(mouseRef.current.rotAccelY, 0, 3.5, delta);
      mouseRef.current.rotAccelX = THREE.MathUtils.damp(mouseRef.current.rotAccelX, 0, 3.5, delta);

      // Dampen wheel zoom back to base scroll zoom
      zoomRef.current.wheelZoom = THREE.MathUtils.damp(zoomRef.current.wheelZoom, 0, 2.5, delta);

      // Smooth zoom-on-scroll
      zoomRef.current.current = THREE.MathUtils.damp(
        zoomRef.current.current,
        zoomRef.current.target,
        4.5,
        delta
      );
      globeGroup.scale.setScalar(zoomRef.current.current);

      // Continuous rotation + cursor tilt + dragging
      if (mouseRef.current.isDragging) {
        globeGroup.rotation.y = mouseRef.current.dragRotY;
        globeGroup.rotation.x = mouseRef.current.dragRotX;
      } else {
        globeGroup.rotation.y = mouseRef.current.dragRotY;
        globeGroup.rotation.x = THREE.MathUtils.damp(
          globeGroup.rotation.x,
          mouseRef.current.y * 0.75 + mouseRef.current.rotAccelX,
          4,
          delta
        );
        globeGroup.rotation.z = THREE.MathUtils.damp(globeGroup.rotation.z, -mouseRef.current.x * 0.45, 4, delta);
      }

      // Orbital satellite trajectory
      const satAngle = elapsed * 1.35;
      const satRadius = 108;
      satellite.position.x = globeGroup.position.x + Math.cos(satAngle) * satRadius * zoomRef.current.current;
      satellite.position.z = globeGroup.position.z + Math.sin(satAngle) * satRadius * 0.85 * zoomRef.current.current;
      satellite.position.y = globeGroup.position.y + Math.sin(satAngle * 1.6) * 32 * zoomRef.current.current;

      // Gimbal rings counter-rotation with acceleration influence
      outerRing1.rotation.z += (delta * 0.16) + (mouseRef.current.rotAccelY * 0.4);
      outerRing2.rotation.z -= (delta * 0.14) + (mouseRef.current.rotAccelY * 0.3);

      // Pulsing arc lines opacity
      arcMat.opacity = 0.5 + Math.sin(elapsed * 2.5) * 0.25;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('scroll', updateScrollZoom);
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', onResize);

      wireframeGeo.dispose();
      wireframeMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      satelliteGeo.dispose();
      satelliteMat.dispose();
      ringMat.dispose();
      arcMat.dispose();
      latLineGeos.forEach(g => g.dispose());
      arcGeos.forEach(g => g.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full max-w-[320px] sm:max-w-[440px] md:max-w-[540px] lg:max-w-[620px] xl:max-w-[660px] mx-auto flex items-center justify-center select-none cursor-grab active:cursor-grabbing touch-pan-y"
      style={{ touchAction: 'pan-y' }}
    >
      {/* Soft radial ambient glow fading fully to transparent (no box/clip edges) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.16) 0%, rgba(56,189,248,0.09) 38%, rgba(37,99,235,0.04) 58%, rgba(10,15,28,0) 74%)',
        }}
      />

      {/* 3D WebGL Canvas Container: Borderless, clean, with reactive acceleration & zoom */}
      <div
        ref={mountRef}
        className="w-full aspect-square min-h-[240px] sm:min-h-[340px] md:min-h-[440px] lg:min-h-[500px] relative z-10 flex items-center justify-center overflow-hidden"
        style={{ touchAction: 'pan-y' }}
      />
    </div>
  );
}
