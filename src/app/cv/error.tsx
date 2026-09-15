'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function CVError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    const isChunkError =
      error.name === 'ChunkLoadError' ||
      error.message?.includes('Loading chunk') ||
      error.message?.includes('ChunkLoadError')

    if (isChunkError) {
      const hasReloaded = sessionStorage.getItem('cv_chunk_reload_retry')
      if (!hasReloaded) {
        sessionStorage.setItem('cv_chunk_reload_retry', 'true')
        window.location.reload()
        return
      }
    }
    sessionStorage.removeItem('cv_chunk_reload_retry')
  }, [error])

  return (
    <div className="min-h-screen bg-[#07070a] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-white">Unable to display CV</h2>
        <p className="text-sm text-gray-400">
          The bundle was updated in the background. You can reload the page or view the PDF directly.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
          >
            Reload Page
          </button>
          <a
            href="/Bemnet_Yitagesu_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white rounded-lg text-sm font-semibold transition-colors"
          >
            View PDF Directly
          </a>
          <Link
            href="/"
            className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-sm font-semibold transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
