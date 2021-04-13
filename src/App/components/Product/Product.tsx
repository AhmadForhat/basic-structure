import Skeleton from "react-loading-skeleton"

import {containerSkeleton, skeleton, cardContainer, imgStyle} from './style'

export interface cardType {
  id?: number
  alt?: string
  category?: string
  image?: string
  children?: React.ReactNode
  onClick?: () => void
}

interface ProductCardProps {
  /** propriedades do card */
  card: cardType
  styleImage?: React.CSSProperties
  styleCardContainer?: React.CSSProperties
  isLoading?: boolean
  skeletonHeight?: string | number
}

export const SkeletonCard = ({skeletonHeight}: {skeletonHeight?: string | number}) => {
  return (
    <div style={containerSkeleton}>
      <Skeleton height={skeletonHeight || '200px'} />
      <Skeleton height="20px" style={skeleton} />
      <Skeleton height="20px" style={skeleton} />
    </div>
  )
}

const ShopCard = ({ card, styleImage, styleCardContainer }: ProductCardProps) => {
  return (
    <div style={{ ...cardContainer, ...styleCardContainer }}>
      <img src={card.image} alt={card.alt} style={{ ...imgStyle, ...styleImage }} />
      {card.children}
    </div>
  )
}

const Product = ({isLoading, skeletonHeight, ...props}: ProductCardProps) => {
  if(isLoading) return (
    <SkeletonCard skeletonHeight={skeletonHeight} />
  )

  return (
    <ShopCard {...props} />
  )
}

export default Product