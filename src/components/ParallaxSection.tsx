'use client'

interface ParallaxSectionProps {
    children: React.ReactNode
    speed?: number
    className?: string
}

export const ParallaxSection = ({ children, className = '' }: ParallaxSectionProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export const ParallaxText = ({
    children,
    className = ''
}: {
    children: React.ReactNode
    speed?: number
    className?: string
}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
