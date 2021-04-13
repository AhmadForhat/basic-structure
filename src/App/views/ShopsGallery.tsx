import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'

import Products from '../components/Products'
import Text from "../components/Text"
import Title from "../components/Title"
import Header from "../components/Header"

const maxCardsPerPage = 10

interface shopProps {
  tile: string
  price: string
  title: string
  id: string | number
}

const textLoader = (shop: shopProps) => (
  <>
    <Text
      size="small"
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }}
    >
      {shop.title}
    </Text>
    <Title size="small">{shop.price}</Title>
  </>
)

const ShopsGallery = () => {
  const [isLoading, setLoading] = useState(true)
  const [shops, setShops] = useState([])
  const history = useHistory()
  useEffect(() => {
    const fetch = async () => {
      const result = await axios(`https://fakestoreapi.com/products?limit=${maxCardsPerPage}`, { method: "get" })
      const { data: listOfShops } = result
      const newListOfShops = listOfShops.map((shop : shopProps) => {
        return {
          ...shop,
          children: textLoader(shop),
          onClick: () => history.push(`/productsGallery/${shop.id}`),
        }
      })
      setShops(newListOfShops)
      setLoading(false)
    }
    fetch()
  }, [])

  return (
    <>
      <Header to="/" title="Ziro" />
      <Products 
        skeletonHeight={320}
        styleImage={{height: 320}}
        cards={shops}
        isLoading={isLoading}
        maxCardsPerPage={maxCardsPerPage}
      />
    </>
  )
}

export default ShopsGallery