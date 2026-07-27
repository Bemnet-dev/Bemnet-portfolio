'use client'

interface LogoProps {
  isActive?: boolean
}

const Logo = ({ isActive = false }: LogoProps) => {
  return (
    <div
      className={`w-28 text-center flex items-center justify-center py-1.5 rounded-full font-bold text-xs sm:text-sm tracking-wider select-none transition-all duration-300 ${isActive
        ? 'bg-[#2563eb] text-white shadow-md border border-[#2563eb]/30 active:bg-blue-700 active:text-white'
        : 'text-white hover:bg-white/5 active:bg-[#2563eb] active:text-white'
        }`}
    >
      BEMNET
    </div>
  )
}

export default Logo