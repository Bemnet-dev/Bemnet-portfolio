'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)

  // Safely access theme context
  let theme: 'light' | 'dark' = 'dark'
  let setTheme: (theme: 'light' | 'dark') => void = () => { }

  try {
    const context = useTheme()
    theme = context.theme
    setTheme = context.setTheme
  } catch (error) {
    // Theme context not available during SSR
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" />
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transform active:scale-95"
      aria-label="Toggle theme"
    >
      {/* Track */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${isDark ? 'from-blue-500 to-purple-600' : 'from-orange-400 to-yellow-400'
        } transition-all duration-300`} />

      {/* Thumb */}
      <div className={`relative w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${isDark ? 'translate-x-6' : 'translate-x-0'
        }`}>
        {isDark ? (
          <Moon size={10} className="text-gray-700" />
        ) : (
          <Sun size={10} className="text-yellow-500" />
        )}
      </div>

      {/* Background Icons */}
      <div className={`absolute left-1 top-1 bottom-1 flex items-center justify-center transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'
        }`}>
        <Sun size={12} className="text-white" />
      </div>

      <div className={`absolute right-1 top-1 bottom-1 flex items-center justify-center transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'
        }`}>
        <Moon size={12} className="text-white" />
      </div>
    </button>
  )
}

export default ThemeToggle