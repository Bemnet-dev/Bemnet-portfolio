'use client'

import { Home, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="text-center space-y-8">
                {/* 404 GIF */}
                <div className="space-y-4">
                    <img
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWRidzBnZ3h4aDlmNmRvaXJrcmZ3ZHUwZmlyOHJ3ejZreWp4amRzNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kF0ngyP7S1DfmzKqiN/giphy.gif"
                        alt="404 Not Found"
                        className="w-80 h-80 mx-auto"
                    />

                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-white">
                            Page Not Found
                        </h2>
                        <p className="text-xl text-gray-400 max-w-md mx-auto">
                            Oops! The page you&apos;re looking for seems to have wandered off.
                        </p>
                    </div>
                </div>

                {/* Navigation Options */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 group"
                    >
                        <Home size={20} className="mr-2" />
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}