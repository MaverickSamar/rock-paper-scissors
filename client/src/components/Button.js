import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.div`
  display: inline-flex;
  border: 1px solid white;
  border-radius: .5em;
  min-width: 128px;
  padding: .7em;
  box-sizing: border-box;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  :hover {
    background: white;
    color: #101a3f;
  }
`
const FormButtonStyled = styled.div`
  display: inline-flex;
  border: 1px solid black;
  border-radius: .5em;
  min-width: 128px;
  padding: .7em;
  box-sizing: border-box;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  :hover {
    background: black;
    color: #ff6200;
  }
`


function Button({ children, ...props }) {
  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  )
}

export const FormButton = styled(FormButtonStyled)`
    background: white;
    color: #101a3f;
    `

export const WhiteButton = styled(ButtonStyled)`
  background: white;
  color: #101a3f;
  min-width: 220px;
`

export default Button