import React from 'react';

import Wrapper from '../App/components/Wrapper'
import Title from '../App/components/Title'
import Text from '../App/components/Text'

const App = () => {
  return (
      <Wrapper style={{backgroundColor: '#d1d1d1'}}>
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
    </Wrapper>
  );
}

export default App;
