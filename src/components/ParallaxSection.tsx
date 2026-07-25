'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ParallaxSectionProps {
    children: React.ReactNode
    speed?: number
    className?: string
}

export const ParallaxSection = ({ children, speed = 0.5, className = '' }: ParallaxSectionProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [offset, setOffset] = useState(0)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect()
                const scrollProgress = 1 - (rect.top + rect.height) / window.innerHeight
                setOffset(scrollProgress * 100 * speed)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [speed, mounted])

    return (
        <motion.div
            ref={ref}
            style={{ y: offset }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const ParallaxText = ({
    children,
    speed = 0.3,
    className = ''
}: {
    children: React.ReactNode
    speed?: number
    className?: string
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [offset, setOffset] = useState(0)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect()
                const scrollProgress = 1 - rect.top / window.innerHeight
                setOffset(scrollProgress * 50 * speed)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [speed, mounted])

    return (
        <motion.div
            ref={ref}
            style={{ y: offset }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
