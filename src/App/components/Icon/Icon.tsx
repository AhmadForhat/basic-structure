import React, { FC } from "react";
import * as Feather from "react-feather";

import * as SvgIcons from "./SvgIcons";

interface IconProps extends Feather.IconProps {
  iconName?: keyof typeof Feather;
  customName?: keyof typeof SvgIcons;
}

const Icon: FC<IconProps> = ({ iconName, customName, ...rest }) => {
  const IconFeather = iconName && Feather[iconName]
  const IconCustom = customName && SvgIcons[customName]
  if(IconFeather) return <IconFeather {...rest}/>
  if(IconCustom) return <IconCustom {...rest} />
  return null
};

export default Icon;