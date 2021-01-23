import React from 'react'
import {Link as Anchor} from 'wouter'

import {
    normal,
    disable
} from './styles'

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    href: string;
    isDisable?: boolean;
}

const Link = ({
    href,
    isDisable,
    children,
    style,
    ...props
}: LinkProps) => {
    const anchorStyle = isDisable ? disable : normal
    const styles = {...anchorStyle, ...style}

    return (
        isDisable ? (
            <span
                aria-label={`Link para ${href} destivado`} 
                style={styles}
                {...props}
            >
                {children}
            </span>
        ) : (
            <Anchor
                style={styles} 
                href={href}
                {...props}
            >
                {children}
            </Anchor>
        )
        
    )
}

export default Link