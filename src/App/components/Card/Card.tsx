import React from 'react'
import * as Feather from "react-feather";

import * as SvgIcons from "../Icon/SvgIcons";
import Icon from '../Icon'
import Title from '../Title'
import Text from '../Text'

import {
    container,
    containerText,
    containerIcon
} from './styles'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    iconName?: keyof typeof Feather;
    customName?: keyof typeof SvgIcons;
}

const Card = ({
    title,
    description,
    iconName,
    customName,
    style,
    ...props
}: CardProps) => {
    const IconConstructor = () => {
        if(iconName) return <Icon width={70} height={70} iconName={iconName} />
        if(customName) return <Icon width={70} height={70} customName={customName} />
        return null
    }
    return (
        <div 
            style={{...container, ...style}} 
            {...props}
        >
            <div style={containerIcon}>
                <IconConstructor />
            </div>
            <div style={containerText}>
                <Title>
                    {title}
                </Title>
                <Text>
                    {description}
                </Text>
            </div>
        </div>
    )
}

export default Card