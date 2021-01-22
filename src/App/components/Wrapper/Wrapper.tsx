import React from 'react';

import {container, containerWithPadding} from './styles'

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    hasPadding?:boolean,
    style?:any,
}

const Wrapper = ({
    hasPadding,
    children,
    style,
    ...props
} : WrapperProps) => {
    const containerStyle = hasPadding 
    ? containerWithPadding 
    : container

    const styles = {...containerStyle, ...style}

    return (
        <div style={styles} {...props}>
            {children}
        </div>
    )
}

export default Wrapper;
