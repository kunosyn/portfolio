// Download this package.
import { twMerge } from 'tailwind-merge'

export function MaxWidthWrapper ({
  children,
  className
}: {
  children?: React.ReactNode,
  className?: string
}) {
  return (
    <div className={twMerge(className, 'w-full max-w-screen-xl')}>
      {children}
    </div>
  )
}
