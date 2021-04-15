import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom";
import Container from '@bit/ziro.views.container'
import Title from "@bit/ziro.views.title"
import Text from "@bit/ziro.views.text"
import Button from "@bit/ziro.views.button"
import { InputText } from "@bit/ziro.views.input"

import Header from "../components/Header"
import ShopGallery from '../components/ShopGallery'
import themes from "@bit/ziro.utils.themes";

const maxCardsPerPage = 10

interface shopProps {
  tile: string
  price: string
  title: string
  id: string | number
}

interface ParamTypes {
  shop: string
}

const textLoaderV2 = (card: shopProps, shop: string) => {
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
        {card.title}
      </Text>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title size="small">{card.price}</Title>
      </div>
      <Button style={{padding: '5px', fontSize: '12px', boxShadow: themes.shadow.secondary}} >
        Adicionar
      </Button>
    </>
  )
}

const Shop = () => {
  const [isLoading, setLoading] = useState(true)
  const [shops, setShops] = useState([])
  const [name, setName] = useState('')
  const { shop } = useParams<ParamTypes>()
  useEffect(() => {
    const fetch = async () => {
      const result = await axios(`https://fakestoreapi.com/products?limit=${maxCardsPerPage}`, { method: "get" })
      const { data: listOfShops } = result
      const newListOfShops = listOfShops.map((card: shopProps) => {
        return {
          ...card,
          children: textLoaderV2(card, shop),
          to: `/shops/${shop}/${card.id}`
        }
      })
      setShops(newListOfShops)
      setLoading(false)
    }
    fetch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container>
      <Header to="/shops" title={`Loja ${shop}`} />
      <InputText style={{marginTop:'20px'}} inputName="username" placeHolder="Procure seu produto" value={name} setValue={setName} />
      <ShopGallery
        styleCardContainer={{height: '250px'}} 
        cards={shops}
        isLoading={isLoading}
        maxCardsPerPage={maxCardsPerPage}
      />
    </Container>
  )
}

export default Shop