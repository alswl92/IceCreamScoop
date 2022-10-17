import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
padding: 2rem;
`

const Left= styled.div`
 width: 50%;
    display: flex;
    flex-direction: column;
`

const Middle= styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1.5rem;
`
const Right = styled.div`
  width: 20%;
`

const Logo = styled.div`
    font-family: 'Pacifico';
    font-weight: 800;
    font-size: 2.5rem;`

const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo>IceCream Scoop</Logo>
        The most wonderful ice cream website!
        </Left>
        <Middle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Middle>
        <Right>
        <a href="http://alswl92.github.io/HelloMinji">Minji Kim's Portfolio</a>
        </Right>
    </Container>
  )
}

export default Footer