import { twMerge } from 'tailwind-merge'

export function Button ({
  children,
  className,
  variant = 'ghost',
  onClick
}: {
  children: React.ReactNode,
  className?: string,
  variant?: 'ghost' | 'fill' | 'outline-fill' | 'dropdown-button' | 'nav-button' | 'hero-button',
  onClick?: () => any
}) {
  return (
    <button onClick={onClick} className={twMerge(className, variants.get(variant), 'font-semibold py-2 px-3.5 border-2 rounded-xl transition-all z-30')}>
      {children}
    </button>
  )
}

const variants = new Map(Object.entries({
  ghost: '',
  'dropdown-button': 'bg-opacity-0 text-white bg-black border-white hover:animate-pulsating-glow hover:text-white drop-shadow-text',
  fill: 'text-white bg-purple-400 border-purple-400 hover:bg-purple-300 hover:border-purple-300',
  'outline-fill': 'text-white bg-white border-white bg-opacity-0 hover:animate-pulsating-glow hover:text-white',
  'nav-button': 'transition-all text-white bg-none border-none hover:animate-pulsating-glow',
  'hero-button': 'bg-white rounded-sm text-black font-normal border-neutral-300'
}))
