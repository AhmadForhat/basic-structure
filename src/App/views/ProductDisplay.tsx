import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'
import Container from '@bit/ziro.views.container'

import Product, {cardType} from '../components/Product'
import Header from "../components/Header"

interface ParamTypes {
  shop: string
  product: string
}

const ProductDisplay = () => {
  const [newProduct, setNewProduct] = useState({})
  const [isLoading, setLoading] = useState(true)

  const { shop,  product} = useParams<ParamTypes>()
  useEffect(() => {
    const fetch = async () => {
      const result = await axios(`https://fakestoreapi.com/products/${product}`, { method: "get" })
      const { data: listOfShops } = result
      const newListOfShops: cardType = {
          ...listOfShops,
          alt: 'batata',
          children: <h2>batata</h2>,
          to: '/',
      }
      setNewProduct(newListOfShops)
      setLoading(false)
    }
    fetch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (

    <Container>
      <Header to={`/shops/${shop}`} title="Ziro" />
      <Product
        card={newProduct}
        styleImage={{height: 400}}
        isLoading={isLoading}
      />
    </Container>
  )
}

export default ProductDisplay