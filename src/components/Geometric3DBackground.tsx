"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const Geometric3DBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xf8fafc, 8, 22);

    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    /* 🎨 COLORS */
    const colors = [
      0x4dabf7,
      0x845ef7,
      0xff6b6b,
      0x22b8cf,
    ];

    const shapes: THREE.Mesh[] = [];
    const totalShapes = 14;

    const visibleHeight =
      2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    const visibleWidth = visibleHeight * camera.aspect;

    for (let i = 0; i < totalShapes; i++) {
      let geometry;

      const size = 1 + Math.random() * 1.2;
      const type = Math.random();

      if (type < 0.33) {
        geometry = new THREE.BoxGeometry(size, size, size);
      } else if (type < 0.66) {
        geometry = new THREE.SphereGeometry(size * 0.7, 32, 32);
      } else {
        geometry = new THREE.ConeGeometry(size * 0.7, size * 1.5, 3);
      }

      const baseColor =
        colors[Math.floor(Math.random() * colors.length)];

      /* 🎨 GRADIENT MATERIAL (main upgrade) */
      const material = new THREE.MeshPhysicalMaterial({
        color: baseColor,
        roughness: 0.15,
        metalness: 0.7,
        clearcoat: 0.6,
        clearcoatRoughness: 0.2,
        emissive: baseColor,
        emissiveIntensity: 0.12,
      });

      const mesh = new THREE.Mesh(geometry, material);

      /* POSITION (UNCHANGED) */
      mesh.position.x = (Math.random() - 0.5) * visibleWidth * 1.1;
      mesh.position.y = (Math.random() - 0.5) * visibleHeight * 1.1;
      mesh.position.z = -Math.random() * 14;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      /* ✨ EDGE GRADIENT LOOK */
      const edges = new THREE.EdgesGeometry(geometry);

      const edgeColor = new THREE.Color(baseColor).offsetHSL(0, 0, 0.2);

      const lineMaterial = new THREE.LineBasicMaterial({
        color: edgeColor,
        transparent: true,
        opacity: 0.35,
      });

      const edgeLines = new THREE.LineSegments(edges, lineMaterial);
      mesh.add(edgeLines);

      scene.add(mesh);
      shapes.push(mesh);
    }

    /* 💡 LIGHTING (slightly enhanced for gradient effect) */
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 1.2);
    fillLight.position.set(-5, -3, 5);
    scene.add(fillLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.6);
    backLight.position.set(0, 0, -5);
    scene.add(backLight);

    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    /* 🌊 ANIMATION */
    const animate = () => {
      requestAnimationFrame(animate);

      shapes.forEach((shape, i) => {
        shape.rotation.x += 0.0012;
        shape.rotation.y += 0.0015;

        shape.position.y += Math.sin(Date.now() * 0.001 + i) * 0.0015;
      });

      renderer.render(scene, camera);
    };

    animate();

    /* 📱 RESPONSIVE */
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      {/* 🌈 BACKGROUND GRADIENT (slightly enhanced) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-[#f1f5ff] to-[#e0e7ff]" />

      {/* 🎨 3D */}
      <div
        ref={mountRef}
        className="absolute inset-0 opacity-85 pointer-events-none"
      />
    </>
  );
};

export default Geometric3DBackground;