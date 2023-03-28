import React from 'react'
import styled from 'styled-components'

const Button = ({children}:any) => {
  return (
    <PrimaryButton>{children}</PrimaryButton>
  )
}

export default Button

const PrimaryButton = styled.button`
    border: none;
    border-radius: 4px;
    background-color: "#1d3662";
    padding: 14px 30px;
    color: "blue";
    font-size: 16px;
    &:hover{
        cursor: pointer;
    }
`