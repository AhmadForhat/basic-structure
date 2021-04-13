import Product, {SkeletonCard, cardType} from '../Product'
import {buttonContainer, container, containerCard} from './style'

interface ProductGalleryProps {
  /** estado de loading do componente */
  isLoading: boolean
  /** array com as informacoes dos cards */
  cards: cardType[]
  /** the maximum number of cards that will de displayed on screen before pagination starts */
  maxCardsPerPage: number
  styleImage?: React.CSSProperties
  styleCardContainer?: React.CSSProperties
  skeletonHeight?: string | number
}

const ProductCards = ({ styleImage, styleCardContainer, isLoading, cards, maxCardsPerPage, skeletonHeight }: ProductGalleryProps) => {
  if (isLoading) {
    /** to display skeletons correctly we must map over a fake array while component is loading */
    const iterator = Array.from(Array(maxCardsPerPage).keys())
    return (
      <div style={container}>
        {iterator.map((index: number) => (
          <div style={containerCard} key={index}>
            <SkeletonCard skeletonHeight={skeletonHeight} />
          </div>
        ))}
      </div>
    )
  }
  return (
    <>
      {cards.map((card: cardType) => (
        <button
          onClick={card.onClick}
          type="submit"
          key={card.id}
          style={buttonContainer}
        >
          <div style={containerCard}>
            <Product styleImage={styleImage} styleCardContainer={styleCardContainer} card={card} />
          </div>
        </button>
      ))}
    </>
  )
}

const GalleryContainer = ({ children }: { children: React.ReactNode }) => {
  return <div style={container}>{children}</div>
}

const Products = ({ ...props }: ProductGalleryProps) => {
  return (
    <GalleryContainer>
      <ProductCards {...props} />
    </GalleryContainer>
  )
}
export default Products
