'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/util'
import React from 'react'
import { BadgeDollarSign, ChevronDown, Inbox, Mail } from 'lucide-react'

export function Card (props: ProjectProps | ContactProps) {
  props.animate ??= true

  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },

    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
  }

  if (props.variant == 'project') {
    return (
      <Link href={props.href} className={cn('relative p-[4px] group', props.containerClassName)}>
        <motion.div
          variants={props.animate ? variants : undefined}
          initial={props.animate ? 'initial' : undefined}
          animate={props.animate ? 'animate' : undefined}
          transition={
            props.animate
              ? {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }
              : undefined
          }
          style={{
            backgroundSize: props.animate ? '400% 400%' : undefined,
          }}
          className={cn(
            'absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform',
            'bg-[radial-gradient(circle_farthest-side_at_0_100%,#9c89b8,transparent),radial-gradient(circle_farthest-side_at_100%_0,#f0a6ca,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#efc3e6,transparent),radial-gradient(circle_farthest-side_at_0_0,#f0e6ef,#b8bedd)]'
          )}
        />
        <motion.div
          variants={props.animate ? variants : undefined}
          initial={props.animate ? 'initial' : undefined}
          animate={props.animate ? 'animate' : undefined}
          transition={
            props.animate
              ? {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }
              : undefined
          }
          style={{
            backgroundSize: props.animate ? '400% 400%' : undefined,
          }}
          className={cn(
            'absolute inset-0 rounded-3xl z-[1] will-change-transform',
            'bg-[radial-gradient(circle_farthest-side_at_0_100%,#9c89b8,transparent),radial-gradient(circle_farthest-side_at_100%_0,#f0a6ca,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#efc3e6,transparent),radial-gradient(circle_farthest-side_at_0_0,#f0e6ef,#b8bedd)]'
          )}
        />
  
        <div className={cn('relative z-10 rounded-[22px] p-10 lg:p-4 bg-zinc-900', props.className)}>
          <Image className='rounded-lg w-full h-auto mb-2' src={`/${props.src}`} width={props.width} height={props.height} alt='Project image.'/>
  
          <aside className='flex flex-col gap-2'>
            <h2 className='font-bold text-lg'>{props.title}</h2>
            <p>{props.description}</p>
          </aside>
        </div>
      </Link>
    )
  }
  else if (props.variant == 'contact') {
    return (
      <Link href={props.href} className={cn('relative p-[4px] group', props.containerClassName)}>
        <motion.div
          variants={props.animate ? variants : undefined}
          initial={props.animate ? 'initial' : undefined}
          animate={props.animate ? 'animate' : undefined}
          transition={
            props.animate
              ? {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }
              : undefined
          }
          style={{
            backgroundSize: props.animate ? '400% 400%' : undefined,
          }}
          className={cn(
            'absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform',
            'bg-[radial-gradient(circle_farthest-side_at_0_100%,#9c89b8,transparent),radial-gradient(circle_farthest-side_at_100%_0,#f0a6ca,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#efc3e6,transparent),radial-gradient(circle_farthest-side_at_0_0,#f0e6ef,#b8bedd)]'
          )}
        />
        <motion.div
          variants={props.animate ? variants : undefined}
          initial={props.animate ? 'initial' : undefined}
          animate={props.animate ? 'animate' : undefined}
          transition={
            props.animate
              ? {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }
              : undefined
          }
          style={{
            backgroundSize: props.animate ? '400% 400%' : undefined,
          }}
          className={cn(
            'absolute inset-0 rounded-3xl z-[1] will-change-transform',
            'bg-[radial-gradient(circle_farthest-side_at_0_100%,#9c89b8,transparent),radial-gradient(circle_farthest-side_at_100%_0,#f0a6ca,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#efc3e6,transparent),radial-gradient(circle_farthest-side_at_0_0,#f0e6ef,#b8bedd)]'
          )}
        />
  
        <div className={cn('relative z-10 rounded-[22px] px-8 py-5 lg:px-4 bg-zinc-900', props.className)}>
          <aside className='flex flex-col gap-2 max-w-xs max-h-40'>
            {cardIcons.get(props.iconName)}
            <h2 className='font-bold text-lg w-full text-center'>{props.title}</h2>
            
            <p className='w-full text-center'>
              {props.children}
            </p>
          </aside>
        </div>
      </Link>
    )
  }

  return <p>Error, card could not be loaded.</p>
}


interface ProjectProps {
  variant: 'project',
  children?: React.ReactNode,
  className?: string,
  containerClassName?: string,
  animate?: boolean,
  src: string,
  href: string,
  height: number,
  width: number,
  title: string,
  description: string
}

interface ContactProps {
  variant: 'contact',
  title: string,
  href: string,
  iconName: string,
  animate?: boolean,
  children?: React.ReactNode,
  className?: string,
  containerClassName?: string,
}

const cardIcons = new Map<string, React.ReactNode>(Object.entries({
  'discord': <Image 
    src='/SocialIcons/discord.svg'
    alt='Discord Icon'
    width={619}
    height={469}
    className='h-7 w-full align-center mb-2'
  />,

  'mail': <Mail className='text-white h-7 w-full align-center mb-2'/>,

  'inbox': <Inbox className='text-white h-7 w-full align-center mb-2' />,

  'price': <BadgeDollarSign className='text-white h-7 w-full align-center mb-2' />
}))