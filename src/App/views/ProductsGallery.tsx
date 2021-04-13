import { useState, useEffect } from "react"
import axios from "axios"
import { useHistory, useParams } from "react-router-dom";

import Products from '../components/Products'
import Text from "../components/Text"
import Title from "../components/Title"
import Header from "../components/Header"
import Icon from "../components/Icon"
import Button from "../components/Button"

const maxCardsPerPage = 10

interface shopProps {
  tile: string
  price: string
  title: string
  id: string | number
}

interface ParamTypes {
  store: string
}

const textLoaderV2 = (shop: shopProps, history: any, store: string) => {
  return (
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title size="small">{shop.price}</Title>
        <Button
          onClick={() => history.push(`/product/${store}/${shop.id}`)}
          style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "40px" }}
        >
          <Icon width="12px" height="12px" featherName="ShoppingCart" />
        </Button>
      </div>
    </>
  )
}

const DisplayShopsDetails = () => {
  const [isLoading, setLoading] = useState(true)
  const [shops, setShops] = useState([])
  const history = useHistory()
  const { store } = useParams<ParamTypes>()
  useEffect(() => {
    const fetch = async () => {
      const result = await axios(`https://fakestoreapi.com/products?limit=${maxCardsPerPage}`, { method: "get" })
      const { data: listOfShops } = result
      const newListOfShops = listOfShops.map((shop: shopProps) => {
        return {
          ...shop,
          children: textLoaderV2(shop, history, store),
        }
      })
      setShops(newListOfShops)
      setLoading(false)
    }
    fetch()
  }, [])
  return (
    <>
      <Header to="/" title="Loja Batatinha" />
      <Products cards={shops} isLoading={isLoading} maxCardsPerPage={maxCardsPerPage} />
    </>
  )
}

export default DisplayShopsDetails