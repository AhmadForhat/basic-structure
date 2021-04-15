import {useState, useEffect} from 'react'
import axios from 'axios'

import Container from '@bit/ziro.views.container'
import { InputText } from "@bit/ziro.views.input"
import Text from "@bit/ziro.views.text"

import ShopGallery from '../components/ShopGallery'

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
  </>
)

const Shops = () => {
  const [isLoading, setLoading] = useState(true)
  const [shops, setShops] = useState([])
  const [name, setName] = useState('')
  // chamar useHTTP para testar e padronizar
  useEffect(() => {
    const fetch = async () => {
      const result = await axios(`https://fakestoreapi.com/products?limit=${maxCardsPerPage}`, { method: "get" })
      const { data: listOfShops } = result
      const newListOfShops = listOfShops.map((shop : shopProps) => {
        return {
          ...shop,
          children: textLoader(shop),
          to: `/shops/${shop.id}`,
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
      <InputText inputName="username" placeHolder="Procure uma loja" value={name} setValue={setName} />
      <div>Slider</div>
      <ShopGallery 
        cards={shops}
        isLoading={isLoading}
        maxCardsPerPage={maxCardsPerPage}
      />
    </Container>
  )
}

export default Shops