import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Bemnet Yitagesu | Full-Stack Developer & UI/UX Designer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #030712 0%, #0c1527 50%, #030712 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle glow circle */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
          }}
        />

        {/* Top brand chip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(59, 130, 246, 0.12)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            padding: '8px 18px',
            borderRadius: '9999px',
            color: '#60a5fa',
            fontSize: '18px',
            fontWeight: 600,
            letterSpacing: '1px',
          }}
        >
          <span>PORTFOLIO &amp; SHOWCASE</span>
        </div>

        {/* Center content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-1px',
              lineHeight: 1.1,
            }}
          >
            Bemnet Yitagesu
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#93c5fd',
              fontWeight: 500,
            }}
          >
            Full-Stack Developer &amp; Creative Designer
          </div>
          <div
            style={{
              fontSize: '20px',
              color: '#9ca3af',
              maxWidth: '850px',
              lineHeight: 1.5,
              marginTop: '8px',
            }}
          >
            Crafting high-performance web applications, fluid motion experiences, and thoughtful digital interfaces with Next.js, React, and TypeScript.
          </div>
        </div>

        {/* Bottom meta row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '24px',
              color: '#d1d5db',
              fontSize: '18px',
              fontWeight: 500,
            }}
          >
            <span>Next.js</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>React Native</span>
            <span>•</span>
            <span>UI/UX</span>
          </div>

          <div
            style={{
              color: '#60a5fa',
              fontSize: '18px',
              fontFamily: 'monospace',
              fontWeight: 600,
            }}
          >
            bemnet-portfolio.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
