import React from 'react'
import styled from 'styled-components'

const Topbar = () => {
  return (
    <Wrapper>
        <LeftSide>
            <Logo>
                HELLO
            </Logo>
        </LeftSide>
        {/* <RightSide>
            <Button/>
            <Button/>
        </RightSide> */}
    </Wrapper>
  )
}

export default Topbar

const Wrapper = styled.div`
    display: flex;
    background-color: #ffffff;
    justify-content: center;
    /* justify-content: space-between; */
    align-items: center;
    padding: 8px 20px;
`
const LeftSide = styled.div`
    display: flex;
`

const Logo = styled.div`
    font-size: 23px;
`