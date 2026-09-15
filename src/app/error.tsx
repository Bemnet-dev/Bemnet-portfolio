'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // If a chunk fails to load (due to build update or server restart), reload the page once
    const isChunkError =
      error.name === 'ChunkLoadError' ||
      error.message?.includes('Loading chunk') ||
      error.message?.includes('ChunkLoadError')

    if (isChunkError) {
      const hasReloaded = sessionStorage.getItem('chunk_reload_retry')
      if (!hasReloaded) {
        sessionStorage.setItem('chunk_reload_retry', 'true')
        window.location.reload()
        return
      }
    }
    sessionStorage.removeItem('chunk_reload_retry')
  }, [error])

  return (
    <div className="min-h-screen bg-[#07070a] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-white">Something went wrong</h2>
        <p className="text-sm text-gray-400">
          The application updated or encountered a temporary connection issue.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
          >
            Reload Page
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white rounded-lg text-sm font-semibold transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  )
}
