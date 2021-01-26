import React from 'react'
import {
    container,
} from './styles'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = ({
    style,
    children,
    ...props
}: CardProps) => {
    return (
        <div 
            style={{...container, ...style}} 
            {...props}
        >
            {children}
        </div>
    )
}

export default Card