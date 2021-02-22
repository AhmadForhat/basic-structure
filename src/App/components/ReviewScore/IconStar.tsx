import React from 'react'

const IconStar = ({
    backgroundColor,
    emptyColor,
    porcent
}: {
    backgroundColor:string,
    emptyColor:string,
    porcent:string,
}) => {
    const Icon = () => (
        <svg height="24" viewBox="0 0 24 24" width="24">
        <defs>
        <linearGradient id="grad">
            <stop offset="0%" stop-color={backgroundColor} />
            <stop offset={porcent} stop-color={backgroundColor} />
            <stop offset={porcent} stop-color={emptyColor} />
            <stop offset="100%" stop-color={emptyColor} />
        </linearGradient>            
        </defs>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path
            fill="url(#grad)"
            stroke="black"
            stroke-width="1.5"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
    )
    return (
        <Icon />    
)}

export default IconStar