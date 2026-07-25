// Service Type
export interface Service {
    icon: React.ComponentType<{ size?: number; className?: string }>
    title: string
    description: string
}

// Project Type
export interface Project {
    name: string
    roles: string[]
    description: string
    timeline: string
    myRole: string
    link: string
    color: string
}

// Stat Type
export interface Stat {
    value: string
    label: string
}

// Navigation Item Type
export interface NavItem {
    name: string
    path: string
}

// Social Link Type
export interface SocialLink {
    icon: React.ComponentType<{ size?: number; className?: string }>
    href: string
    label: string
}

// Footer Link Type
export interface FooterLink {
    name: string
    path: string
}
