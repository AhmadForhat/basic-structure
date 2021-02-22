import React from 'react';
import Skeleton from 'react-loading-skeleton';

import Wrapper from '../App/components/Wrapper'
import Title from '../App/components/Title'
import Text from '../App/components/Text'
import Link from '../App/components/Link'
import Icon from '../App/components/Icon'
import Image from '../App/components/Image'
import Card from '../App/components/Card'
import GeoMap from '../App/components/GeoMap'
import Header from '../App/components/Header'
import ReviewScore from '../App/components/ReviewScore'
import Slide from '../App/components/Slide'

import useDevice from './hooks/useDevice'

const App = () => {
  const {
    isSmallMobile,
    isMobile,
    isDesktop
  }= useDevice()

  console.log(isSmallMobile, isMobile, isDesktop)
  return (
      <Wrapper hasPadding style={{backgroundColor: '#d1d1d1'}}>
        <Header
          title="Primeiro Teste"
          to="/"
        />
        <Title textType="normal">
         Titulo normal
        </Title>
        <Title textType="small">
          Titulo pequeno
        </Title>
        <Text textType="normal">
          Texto normal
        </Text>
        <Text textType="small">
          Texto small
        </Text>
        <Text textType="muted">
          Texto muted
        </Text>
        <Link 
          style={
            {
              padding: '10px 0',
              width:'150px', 
              justifyContent:'space-around'
            }
          } 
          href="/batata"
        >
         <Icon iconName="Camera"/>
          Link Normal
        </Link>
        <Link
          isDisable 
          style={
            {
              padding: '10px 0',
              width:'150px', 
              justifyContent:'space-around'
            }
          } 
          href="/melao"
        >
          <Icon iconName="Camera" color="red" width={48} height={48} />
          Link Disable
        </Link>
        <Icon iconName="Camera"/>
        <Icon customName="Ban" width={48} height={48} />
        <Image name="Error" width="100%" />
        <Image name="Success" width="100%" />
        <Skeleton 
          circle={true}
          width="100px"
          height="100px"
        />
        <Card>
          <Text textType="normal">Batata</Text>
        </Card>
        <GeoMap 
          lat={-23.52935630186012}
          lng={-46.63848150435309}
          width="400px"
          height="400px"
        />
        <ReviewScore score={4.3} />
        <Slide />
    </Wrapper>
  );
}

export default App;