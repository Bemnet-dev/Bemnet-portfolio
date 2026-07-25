'use client'

import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

interface AnimatedBackgroundProps {
    style?: 'rings' | 'halftone' | 'topo' | 'lines'
    peakColor?: string
    valleyColor?: string
    bgColor?: string
}

export const AnimatedBackground = ({
    style = 'rings',
    peakColor = '#1e3a8a',
    valleyColor = '#0f172a',
    bgColor = '#000000',
}: AnimatedBackgroundProps) => {
    const mountRef = useRef<HTMLDivElement>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        const container = mountRef.current
        if (!container) return

        // Scene setup
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        container.appendChild(renderer.domElement)

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)

        // Vertex Shader
        const vertexShader = `
      uniform float uTime;
      uniform float uNoiseScale;
      uniform float uAmplitude;
      uniform vec2 uMouse;
      uniform float uHoverRadius;
      uniform float uHoverStrength;

      varying vec2 vUv;
      varying float vElevation;

      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
      float snoise(vec3 v){ 
        const vec2  C = vec2(1.0/6.0, 1.0/3.0);
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
        i = mod(i, 289.0); 
        vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 1.0/7.0;
        vec3  ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      void main() {
        vUv = uv;
        vec3 pos = position;
        
        float n = snoise(vec3(pos.x * uNoiseScale, pos.y * uNoiseScale, uTime));
        n += 0.4 * snoise(vec3(pos.x * uNoiseScale * 2.0, pos.y * uNoiseScale * 2.0, uTime * 1.5));
        n = n / 1.4;
        
        float mouseDist = distance(pos.xy, uMouse);
        float hoverEffect = smoothstep(uHoverRadius, 0.0, mouseDist);
        
        pos.z += (n * uAmplitude) + (hoverEffect * uHoverStrength);
        
        vElevation = n + (hoverEffect * 0.5);
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `

        // Fragment Shader - Rings Pattern
        const fragmentShader = `
      uniform int uStyle;
      uniform vec3 uColorPeak;
      uniform vec3 uColorValley;
      uniform float uRingsScale;
      uniform float uRingRadius;
      uniform float uRingThickness;

      varying vec2 vUv;
      varying float vElevation;

      void main() {
        float pattern = 0.0;
        float elev = smoothstep(-0.8, 0.8, vElevation);

        // Rings Pattern
        float gridX = fract(vUv.x * uRingsScale);
        float gridY = fract(vUv.y * uRingsScale);
        float dist = distance(vec2(gridX, gridY), vec2(0.5));
        
        float fw = max(fwidth(dist), 0.01);
        
        float outerEdge = 1.0 - smoothstep(uRingRadius - fw, uRingRadius + fw, dist);
        float innerEdge = 1.0 - smoothstep(uRingRadius - uRingThickness - fw, uRingRadius - uRingThickness + fw, dist);
        
        pattern = outerEdge - innerEdge;

        vec3 color = mix(uColorValley, uColorPeak, elev);

        float vignette = smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x) 
                       * smoothstep(0.0, 0.15, vUv.y) * smoothstep(1.0, 0.85, vUv.y);

        vec3 finalColor = color * pattern * vignette;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `

        // Create geometry and material
        const PLANE_SIZE = 50
        const geometry = new THREE.PlaneGeometry(PLANE_SIZE, PLANE_SIZE, 300, 300)

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uNoiseScale: { value: 0.08 },
                uAmplitude: { value: 1.8 },
                uMouse: { value: new THREE.Vector2(0, 0) },
                uHoverRadius: { value: 5 },
                uHoverStrength: { value: 2.5 },
                uStyle: { value: 0 },
                uRingsScale: { value: 100 },
                uRingRadius: { value: 0.35 },
                uRingThickness: { value: 0.08 },
                uColorPeak: { value: new THREE.Color(peakColor) },
                uColorValley: { value: new THREE.Color(valleyColor) },
            },
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Handle resize
        const handleResize = () => {
            const width = container.clientWidth
            const height = container.clientHeight
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderer.setSize(width, height)
        }

        const resizeObserver = new ResizeObserver(handleResize)
        resizeObserver.observe(container)
        handleResize()

        // Mouse tracking
        const raycaster = new THREE.Raycaster()
        const targetMouse = new THREE.Vector2(0, 0)
        const currentMouse = new THREE.Vector2(0, 0)
        let isMouseInside = false

        const onMouseMove = (e: MouseEvent) => {
            isMouseInside = true
            const rect = container.getBoundingClientRect()
            const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
            const y = -(((e.clientY - rect.top) / rect.height) * 2) + 1
            const mouseCoords = new THREE.Vector2(x, y)
            raycaster.setFromCamera(mouseCoords, camera)
            const intersects = raycaster.intersectObject(mesh)
            if (intersects.length > 0 && intersects[0].uv) {
                const uv = intersects[0].uv
                targetMouse.set((uv.x - 0.5) * PLANE_SIZE, (uv.y - 0.5) * PLANE_SIZE)
            }
        }

        const onMouseLeave = () => {
            isMouseInside = false
        }

        container.addEventListener('mousemove', onMouseMove)
        container.addEventListener('mouseleave', onMouseLeave)

        // Animation loop
        const clock = new THREE.Clock()
        let frameId: number

        const tick = () => {
            frameId = requestAnimationFrame(tick)
            const elapsedTime = clock.getElapsedTime()

            currentMouse.lerp(targetMouse, 0.15)

            material.uniforms.uTime.value = elapsedTime * 0.05
            material.uniforms.uMouse.value.copy(currentMouse)

            mesh.rotation.x = -(30 * Math.PI) / 180
            camera.position.set(0, 4, 12)
            camera.lookAt(0, 0, 0)

            renderer.render(scene, camera)
        }

        tick()

        // Cleanup
        return () => {
            cancelAnimationFrame(frameId)
            resizeObserver.disconnect()
            container.removeEventListener('mousemove', onMouseMove)
            container.removeEventListener('mouseleave', onMouseLeave)
            geometry.dispose()
            material.dispose()
            scene.clear()
            renderer.forceContextLoss()
            renderer.dispose()
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement)
            }
        }
    }, [peakColor, valleyColor, bgColor, style, mounted])

    return (
        <div
            ref={mountRef}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                backgroundColor: bgColor,
                overflow: 'hidden',
            }}
        />
    )
}
