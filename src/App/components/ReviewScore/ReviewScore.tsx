import React from 'react'

import Icon from '../Icon'
import Text from '../Text'

import {container, containerText} from './styles'

interface ReviewScoreProps extends React.HTMLAttributes<HTMLDivElement> {
    score: number;
}

const ReviewScore = ({score, style, ...rest} : ReviewScoreProps) => (
    <div style={container()} {...rest}>
        <Text style={containerText}>
            {String(score)}
        </Text>
        {
            [1,2,3,4,5].map(number => (
                score >= number ? (
                    <Icon
                        size="16px"
                        iconName="Star"
                        fill="currentColor"
                    />
                ): (
                    <Icon
                        size="16px"
                        iconName="Star"
                    />
                )
            ))
        }
    </div>
)

export default ReviewScore