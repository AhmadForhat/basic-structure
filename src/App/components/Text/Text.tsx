import React from 'react';

import fontStyle from './styles'

interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
    textType?: string;
    custonStyles?: any;
}

const Text = ({
    textType = 'normal',
    children,
    style,
    ...props
} : TextProps) => {
    const styles = {...fontStyle(textType), ...style}

    return (
        <p style={styles} {...props}>
            {children}
        </p>
    )
}

export default Text;
