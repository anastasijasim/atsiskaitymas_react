import React, { PropsWithChildren } from 'react';

import  Button  from '../components/Button/Button';
import Topbar from './Topbar';
import styled from 'styled-components';

const AuthLayout = ({children}:PropsWithChildren) => {
  return (
    <>
      <Topbar/>
        <MainText>Welcome traveler</MainText>
        <Container>
          {children}
        </Container>
          <Button/>
        
    </>
  )
}

export default AuthLayout

const MainText = styled.p`
  font-size: 25px;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
`



