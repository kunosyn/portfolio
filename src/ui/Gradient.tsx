import { Fira_Code } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

const firaCode = Fira_Code({
    subsets: ['latin']
})

export namespace Gradient {
    export function CodeBlocks ({
        from = '#9C89B8',
        via = '#F0A6CA',
        to = '#EFC3E6',
        children,
        className
    }: {
        from?: string,
        via?: string,
        to?: string,
        children?: React.ReactNode,
        className?: string
    }) {
        return (
            <span className={twMerge(firaCode.className, 'flex gap-4', className)}>
                <span className={`bg-clip-text bg-gradient-to-br from-[${from}] via-[${via}] to-[${to}] text-transparent select-none`}>&lt;</span>
                {children}
                <span className={`bg-clip-text bg-gradient-to-br from-[${from}] via-[${via}] to-[${to}] text-transparent select-none`}>/&gt;</span>
            </span>
        )
    }


    export function Text ({ children }: { children: React.ReactNode }) {
        return (
            <span className='font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#9C89B8] via-[#F0A6CA] to-[#EFC3E6]'>
                {children}
            </span>
        )
    }

    export function ListElement ({ children }: { children: React.ReactNode}) {
        return (
            <>
              <li className='flex items-center gap-2'>
                    <span className='
                        text-transparent bg-clip-text 
                        bg-gradient-to-r from-[#9C89B8] via-[#F0A6CA] to-[#EFC3E6]
                        font-bold
                    '>
                        ~
                    </span> 
                    
                    <span className='text-lg'>{children}</span>
                </li>
            </>
        )
    }
}
