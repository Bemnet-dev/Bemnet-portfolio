'use client'

export default function Loading() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-center">
                <img
                    src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aHJjMm1hOWhhajM4cHVjamhjN214a280eHlocnpndXRheDBxcmVraiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/r3xBH1FXWz0h55CVtj/giphy.gif"
                    alt="Loading"
                    className="w-40 h-40 mx-auto"
                />
                <p className="text-gray-400 mt-4 text-lg">Loading your portfolio...</p>
            </div>
        </div>
    )
}