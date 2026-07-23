'use client'

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 transform hover:scale-105 active:scale-95 transition-transform duration-300">
      {/* Logo Icon */}
      <div className="relative w-10 h-10 hover:rotate-12 transition-transform duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-600 rounded-lg">
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-white font-bold text-lg">B</span>
          </div>
        </div>
      </div>

      {/* Logo Text */}
      <div className="hidden sm:block">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 font-mono">
          <span className="text-primary-600 dark:text-primary-400">Bemnet</span>
          <span className="text-gray-600 dark:text-gray-400">.dev</span>
        </h1>
      </div>
    </div>
  )
}

export default Logo