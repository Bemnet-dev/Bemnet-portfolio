'use client'

import { Home, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
            <div className="text-center space-y-8">
                {/* 404 Animation */}
                <div className="space-y-4 animate-fade-in">
                    <h1 className="text-9xl font-bold text-primary-500 dark:text-primary-400 animate-bounce-slow">
                        404
                    </h1>

                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                            Page Not Found
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                            Oops! The page you&apos;re looking for seems to have wandered off into the digital void.
                        </p>
                    </div>
                </div>

                {/* Navigation Options */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 group transform hover:scale-105"
                    >
                        <Home size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-all duration-300 group transform hover:scale-105"
                    >
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Go Back
                    </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-primary-300 dark:bg-primary-600 rounded-full opacity-20 animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}