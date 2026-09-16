'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

// Vertex shader
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

// Fragment shader based on Framer AcrylicShader with blue-black palette
const fragmentShader = `
  precision highp float;

  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_mouse_speed;
  uniform float u_time;
  uniform float u_speed;
  uniform float u_sensitivity;
  uniform float u_density;
  uniform float u_vignette;
  uniform float u_swirl;
  uniform float u_push;
  uniform float u_flow;
  uniform vec3 u_color1;
  uniform vec3 u_color2;
  uniform vec3 u_color3;
  uniform vec3 u_color4;

  varying vec2 vUv;

  float noise(in vec2 p) {
    return sin(p.x * 0.5) * sin(p.y * 0.5) + 0.2 * sin(p.x * 1.7 + p.y * 1.3);
  }

  mat2 rotate(float angle) {
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  }

  float fbm(in vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 4; i++) {
      value += amplitude * noise(p * frequency);
      p = rotate(0.5) * p * 2.0 + vec2(0.0, u_time * u_speed * u_flow * 0.04);
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 p = (gl_FragCoord.xy - 0.5 * u_resolution) / u_resolution.y;
    vec2 m = (u_mouse - 0.5 * u_resolution) / u_resolution.y;

    float m_dist = length(p - m);
    float push_force = exp(-m_dist * 4.5);
    vec2 swirl_dir = vec2(-(p.y - m.y), p.x - m.x);
    float speed_factor = 0.15 + u_mouse_speed * 2.5 * u_sensitivity;

    p += swirl_dir * push_force * u_swirl * speed_factor;
    p += (p - m) * push_force * u_push * speed_factor;
    p *= u_density;

    vec2 q = vec2(
      fbm(p * 2.0 + vec2(0.0, 0.0)),
      fbm(p * 2.0 + vec2(5.2, 1.3))
    );

    vec2 r = vec2(
      fbm(p * 2.0 + 4.0 * q + vec2(1.7, 9.2) + u_time * u_speed * 0.15),
      fbm(p * 2.0 + 4.0 * q + vec2(8.3, 2.8) + u_time * u_speed * 0.126)
    );

    float f = fbm(p * 1.8 + 4.0 * r);

    // Blue-black acrylic fluid palette blending
    vec3 color = mix(u_color1, u_color2, clamp(f * f * 4.0, 0.0, 1.0));
    color = mix(color, u_color3, clamp(length(q), 0.0, 1.0) * 0.42);
    color = mix(color, u_color4, clamp(r.x * r.x * 2.0, 0.0, 1.0) * 0.38);

    // Vignette for depth and background contrast
    float vignette = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
    float vig = clamp(pow(16.0 * vignette, 0.22), 0.0, 1.0);
    color = mix(color, color * vig, u_vignette);

    gl_FragColor = vec4(color, 1.0);
  }
`

interface AcrylicBackgroundProps {
  className?: string
  opacity?: number
}

export default function AcrylicBackground({
  className = '',
  opacity = 1,
}: AcrylicBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [webglSupported, setWebglSupported] = useState<boolean>(true)

  useEffect(() => {
    // Check WebGL support
    try {
      const testCanvas = document.createElement('canvas')
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl')
      if (!gl) {
        setWebglSupported(false)
        return
      }
    } catch {
      setWebglSupported(false)
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    // Setup Three.js scene and orthographic camera for full-screen quad
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
    })

    const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 1.5)
    renderer.setPixelRatio(dpr)

    // Palette: Blue - Black Acrylic Shader
    // Color 1: Deepest Inky Black / Obsidian Base (#020409)
    // Color 2: Midnight Navy / Deep Ocean Trench (#071633)
    // Color 3: Royal Sapphire / Electric Cobalt Ribbon (#1d4ed8)
    // Color 4: Azure / Deep Sky Blue Shimmer (#0284c7)
    const uniforms = {
      u_resolution: { value: new THREE.Vector2(window.innerWidth * dpr, window.innerHeight * dpr) },
      u_mouse: { value: new THREE.Vector2((window.innerWidth / 2) * dpr, (window.innerHeight / 2) * dpr) },
      u_mouse_speed: { value: 0.0 },
      u_time: { value: 0.0 },
      u_speed: { value: 1.15 },
      u_sensitivity: { value: 0.05 },
      u_density: { value: 2.8 },
      u_vignette: { value: 0.65 },
      u_swirl: { value: 2.2 },
      u_push: { value: 0.08 },
      u_flow: { value: 0.9 },
      u_color1: { value: new THREE.Vector3(0.008, 0.016, 0.035) },
      u_color2: { value: new THREE.Vector3(0.027, 0.086, 0.20) },
      u_color3: { value: new THREE.Vector3(0.114, 0.306, 0.847) },
      u_color4: { value: new THREE.Vector3(0.02, 0.45, 0.82) },
    }

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthWrite: false,
      depthTest: false,
    })

    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Pointer state with silky inertia tracking
    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      lx: window.innerWidth / 2,
      ly: window.innerHeight / 2,
      speed: 0,
    }

    const handleMouseMove = (e: MouseEvent) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        pointer.x = e.touches[0].clientX
        pointer.y = e.touches[0].clientY
      }
    }

    const handlePointerReset = () => {
      pointer.x = window.innerWidth / 2
      pointer.y = window.innerHeight / 2
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    document.addEventListener('mouseleave', handlePointerReset, { passive: true })
    document.addEventListener('touchend', handlePointerReset, { passive: true })

    // Resize handler
    const updateSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const curDpr = Math.min(window.devicePixelRatio || 1, 1.5)
      renderer.setPixelRatio(curDpr)
      renderer.setSize(width, height, false)
      uniforms.u_resolution.value.set(width * curDpr, height * curDpr)
    }

    updateSize()
    window.addEventListener('resize', updateSize, { passive: true })

    // Animation render loop
    let animationFrameId = 0
    let lastTime = performance.now()
    let totalTime = 0

    const render = (now: number) => {
      const dt = Math.min(0.1, (now - lastTime) / 1000)
      lastTime = now

      totalTime += dt
      uniforms.u_time.value = totalTime

      // Smooth inertia lerp for pointer
      const dx = pointer.x - pointer.lx
      const dy = pointer.y - pointer.ly
      pointer.lx += dx * 0.08
      pointer.ly += dy * 0.08

      const trailingDistance = Math.sqrt(dx * dx + dy * dy)
      const targetSpeed = Math.min(2.0, trailingDistance * 0.012)
      pointer.speed += (targetSpeed - pointer.speed) * 0.12

      uniforms.u_mouse_speed.value = pointer.speed
      const curDpr = renderer.getPixelRatio()
      uniforms.u_mouse.value.set(
        pointer.lx * curDpr,
        renderer.domElement.height - pointer.ly * curDpr
      )

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('mouseleave', handlePointerReset)
      document.removeEventListener('touchend', handlePointerReset)
      window.removeEventListener('resize', updateSize)

      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  if (!webglSupported) {
    return (
      <div
        aria-hidden="true"
        className={`fixed inset-0 -z-10 pointer-events-none ${className}`}
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, #071633 0%, #030a1c 45%, #020409 100%)',
          opacity,
        }}
      />
    )
  }

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`fixed inset-0 -z-10 pointer-events-none overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="w-full h-full block"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      />
    </div>
  )
}
