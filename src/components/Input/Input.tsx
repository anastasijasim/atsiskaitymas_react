import React from 'react'
import styled from 'styled-components'

const Input = (props:any) => {
  return <StyledInput{...props}/>;
};

export default Input;

const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid lightgrey ;
`

