import React from 'react'
import { Div } from '@/components/styled'

interface IconButtonI {
    text: string,
    icon: React.ReactNode,
    sx: string
}

export const IconButton = (props: IconButtonI) => {

    return (
        <Div className={`w-[100%] h-[100%] flex items-center justify-between px-2 ${props.sx}`}>
            {props.icon}
            <span>{props.text}</span>
        </Div>
    )
}