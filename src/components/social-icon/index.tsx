import React from 'react'
import Link from 'next/link'

interface SocialIconI {
    icon: React.ReactNode
    sx: string
    href: string
}

export const SocialIcon = (props: SocialIconI) => {
    return (
        <Link href={props.href}>
            <div className={`w-[100%] p-[.2rem] rounded-md cursor-pointer ${props.sx}`}>
                {props.icon}
            </div>
        </Link>
    )
}