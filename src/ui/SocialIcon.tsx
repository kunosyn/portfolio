import Link from 'next/link'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export function SocialIcon ({
  alt,
  width,
  height,
  src,
  title,
  href,
  className
}: {
  alt: string,
  width: number,
  height: number,
  src: string,
  title: string,
  href: string,
  className?: string
}) {
  return (
    <Link
      href={href}
      target='_blank'
      referrerPolicy='no-referrer'
      className={twMerge('cursor-pointer', className)}
      title={title}
    >
      <Image
        className='w-7 h-7'
        src={`/SocialIcons/${src}`}
        alt={alt}
        width={width}
        height={height}
      />
    </Link>
  )
}