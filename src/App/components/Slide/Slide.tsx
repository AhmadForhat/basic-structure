import React, {useRef} from 'react'

import useScrollSlide from "./useScrollSlide";

import {container, containerList, list, firstItem} from './styles'

interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {
    components: React.ReactElement<Element>[]
}

const Slide = ({
    components,
    style,
}: SlideProps) => {
    const divRef = useRef<HTMLHeadingElement>(null)

    useScrollSlide(divRef);

    const containerStyles = {...style, ...container}

    return (
        <div style={containerStyles} ref={divRef}>
            <ul style={containerList}>
                {
                    components.map((item,index) => (
                        <li style={index === 0 ? firstItem : list}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Slide