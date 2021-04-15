import {Link} from 'react-router-dom'

import Product, {SkeletonCard, cardType} from '../Product'
import {container, containerCard} from './style'

interface ProductGalleryProps {
  /** estado de loading do componente */
  isLoading: boolean
  /** array com as informacoes dos cards */
  cards: cardType[]
  /** the maximum number of cards that will de displayed on screen before pagination starts */
  maxCardsPerPage: number
  styleImage?: React.CSSProperties
  styleCardContainer?: React.CSSProperties
}

const ProductCards = ({ styleImage, styleCardContainer, isLoading, cards, maxCardsPerPage }: ProductGalleryProps) => {
  if (isLoading) {
    /** to display skeletons correctly we must map over a fake array while component is loading */
    const iterator = Array.from(Array(maxCardsPerPage).keys())
    return (
      <>
        {iterator.map((index: number) => (
          <div style={containerCard} key={index}>
            <SkeletonCard />
          </div>
        ))}
      </>
    )
  }
  return (
    <>
      {cards.map((card: cardType) => (
        <Link
          to={card.to || '/'}
        >
            <Product styleImage={styleImage} styleCardContainer={styleCardContainer} card={card} />
        </Link>
      ))}
    </>
  )
}

const GalleryContainer = ({ children }: { children: React.ReactNode }) => {
  return <div style={container}>{children}</div>
}

const ShopGallery = ({ ...props }: ProductGalleryProps) => {
  return (
    <GalleryContainer>
      <ProductCards {...props} />
    </GalleryContainer>
  )
}
export default ShopGallery
