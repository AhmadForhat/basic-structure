import React, {useState} from 'react'

import slide1 from './slide1.png';
import slide2 from './slide2.png';
import {containerImages, container, circle, containerControl, containerImage, containerNextImage} from './styles'

const nextIndex = (array: string[], currentIndex: number) => {
    const numberElements = array.length - 1
    return currentIndex + 1 > numberElements ? 0 : currentIndex + 1
}

const arrayImages = [
    slide1,
    slide2,
    slide1,
    slide2
]

const Slide = ({
    height,
}: {height?: string | number}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    console.log(currentIndex)
    
    return (
        <>
        <div style={container(height)}>
            <div>
                <div style={containerImages(height)}>
                    <img style={containerImage(height)} alt="Slide atual" src={arrayImages[currentIndex]}/>
                    <img style={containerNextImage(height)} alt="Próximo slide" src={arrayImages[nextIndex(arrayImages, currentIndex)]}/>
                </div>
            </div>
            <div style={containerControl}>
                {
                    arrayImages.map((image,index) => (
                        <button 
                            aria-label={`Ir para o slide ${index}`}
                            style={circle()}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))
                }
            </div>
        </div>
         </>
    )
}

export default Slide