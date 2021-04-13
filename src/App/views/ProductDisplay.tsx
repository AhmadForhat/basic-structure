import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'

import Product, {cardType} from '../components/Product'
import Header from "../components/Header"

interface ParamTypes {
  store: string
  id: string
}

const ProductDisplay = () => {
  const [product, setProduct] = useState({})
  const [isLoading, setLoading] = useState(true)

  const { store,  id} = useParams<ParamTypes>()
  useEffect(() => {
    const fetch = async () => {
      const result = await axios(`https://fakestoreapi.com/products/${id}`, { method: "get" })
      const { data: listOfShops } = result
      const newListOfShops: cardType = {
          ...listOfShops,
          alt: 'batata',
          children: <h2>batata</h2>,
      }
      setProduct(newListOfShops)
      setLoading(false)
    }
    fetch()
  }, [])
  return (

    <>
      <Header to={`/productsGallery/${store}`} title="Ziro" />
      <Product 
        skeletonHeight={400}
        card={product}
        styleImage={{height: 400}}
        isLoading={isLoading}
      />
    </>
  )
}

export default ProductDisplay