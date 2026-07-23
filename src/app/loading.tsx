'use client'

export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
            <div className="text-center space-y-6">
                {/* Animated Logo */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto animate-spin">
                    <span className="text-white font-bold text-2xl">B</span>
                </div>

                {/* Loading Text */}
                <div className="animate-fade-in">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Loading Portfolio
                    </h2>
                    <div className="flex items-center justify-center space-x-1">
                        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}