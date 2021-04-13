import { useRef } from "react"
import {Link} from 'react-router-dom'

import Icon from "../Icon"
import Title from "../Title"

import { container, iconStyle, titleStyle } from "./styles"

interface HeaderProps {
  /** path para quando o usuario apertar o icone de voltar */
  to: string
  /** titulo do header */
  title: string
}

const Header = ({ to, title }: HeaderProps) => {
  /** adjust icon size based on title height */
  const titleRef = useRef(null)
  return (
    <div style={container}>
      <Link to={to}>
        <Icon width={24} height={24} featherName="ArrowLeft" style={iconStyle} />
      </Link>
      <Title ref={titleRef} style={titleStyle}>
        {title}
      </Title>
    </div>
  )
}

export default Header
