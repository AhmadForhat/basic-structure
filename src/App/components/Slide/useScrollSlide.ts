import {useEffect, RefObject} from 'react'
import { useSlider } from "react-use";


const useScrollSlide = (divRef: RefObject<HTMLElement>) => {
  const { isSliding, value } = useSlider(divRef);

    useEffect(() => {
        document.querySelectorAll('li').forEach(element => element.ondragstart = () => false)
    },[])

    useEffect(() => {
        const node = divRef.current
        if(node){
            const scrollValue = value * node.scrollWidth
            node.scrollTo(scrollValue,0)
        }
    },[divRef, value])

    return {
      value,
      isSliding
    }
}

export default useScrollSlide