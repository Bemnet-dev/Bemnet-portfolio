'use client'

import { useEffect, useState, useRef } from 'react'

interface CounterProps {
    target: number
    duration?: number
    suffix?: string
}

const Counter = ({ target, duration = 2, suffix = '' }: CounterProps) => {
    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasStarted) {
                setHasStarted(true)
            }
        }, { threshold: 0.5 })

        const currentRef = ref.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [hasStarted])

    useEffect(() => {
        if (!hasStarted) return

        let currentCount = 0
        const increment = target / (duration * 60)
        const interval = setInterval(() => {
            currentCount += increment
            if (currentCount >= target) {
                setCount(target)
                clearInterval(interval)
            } else {
                setCount(Math.floor(currentCount))
            }
        }, 1000 / 60)

        return () => clearInterval(interval)
    }, [hasStarted, target, duration])

    return (
        <div ref={ref}>
            <span className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                {count}
            </span>
            <span className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                {suffix}
            </span>
        </div>
    )
}

export default Counter