import Skeleton from "react-loading-skeleton"

import {containerSkeleton, cardContainer, imgStyle} from './style'

export interface cardType {
  id?: number
  alt?: string
  category?: string
  image?: string
  children?: React.ReactNode
  to?: string
}

interface ProductCardProps {
  /** propriedades do card */
  card: cardType
  styleImage?: React.CSSProperties
  styleCardContainer?: React.CSSProperties
  isLoading?: boolean
}

export const SkeletonCard = () => {
  return (
    <div style={containerSkeleton}>
      <Skeleton height="150px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </div>
  )
}

const ProductCard = ({ card, styleImage, styleCardContainer }: ProductCardProps) => {
  return (
    <div style={{ ...cardContainer, ...styleCardContainer }}>
      <img src={card.image} alt={card.alt} style={{ ...imgStyle, ...styleImage }} />
      {card.children}
    </div>
  )
}

const Product = ({isLoading, ...props}: ProductCardProps) => {
  if(isLoading) return (
    <SkeletonCard />
  )

  return (
    <ProductCard {...props} />
  )
}

export default Product
