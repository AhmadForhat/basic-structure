import React from 'react'

import Icon from '../Icon'
import Link from '../Link'
import Title from '../Title'
import {
    container,
    containerText,
    containerIcon
} from './styles'

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    to: string;
    title: string;
}

const Header = ({
    title,
    to
}: HeaderProps) => {
    return (
        <div style={container}>
            <Link 
                href={to}
            >
                <Icon 
                    style={containerIcon}
                    iconName="ArrowLeft"
                />
            </Link>
            <div style={containerText}>
                <Title>
                    {title}
                </Title>
            </div>
        </div>
    )
}

export default Header