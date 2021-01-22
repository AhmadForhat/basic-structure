import React from 'react';

import {
    small,
    normal
} from './styles'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    textType?: string;
    custonStyles?: any;
}

const Title = ({
    textType,
    children,
    style,
    ...props
} : TitleProps) => {
    const titleStyle = textType === 'small' ? small : normal
    const styles = {...titleStyle, ...style}

    return (
        <h2 style={styles} {...props}>
            {children}
        </h2>
    )
}

export default Title;
