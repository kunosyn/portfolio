'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/util'

export const FeaturedProjectCard = ({
  children,
  className,
  containerClassName,
  animate = true,
  src,
  href,
  height,
  width,
  title,
  description
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean,
  src: string,
  href: string,
  height: number,
  width: number,
  title: string,
  description: string
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <Link href={href} className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#9c89b8,transparent),radial-gradient(circle_farthest-side_at_100%_0,#f0a6ca,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#efc3e6,transparent),radial-gradient(circle_farthest-side_at_0_0,#f0e6ef,#b8bedd)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#9c89b8,transparent),radial-gradient(circle_farthest-side_at_100%_0,#f0a6ca,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#efc3e6,transparent),radial-gradient(circle_farthest-side_at_0_0,#f0e6ef,#b8bedd)]"
        )}
      />

      <div className={cn('relative z-10 rounded-[22px] p-10 lg:p-4 bg-zinc-900', className)}>
        <Image className='rounded-lg w-full h-auto mb-2' src={`/${src}`} width={width} height={height} alt='Project image.'/>

        <aside className='flex flex-col gap-2'>
          <h2 className='font-bold text-lg'>{title}</h2>
          <p>{description}</p>
        </aside>
      </div>
    </Link>
  )
}