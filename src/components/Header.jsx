import React from 'react'
import { Parallax} from "react-parallax";
import styled from 'styled-components';
import img from '../assets/IceCream.jpg'

const Container = styled.div`
  width: auto;
  height: max-content;
`
const Inside = styled.h1`
  background: white;
  color: black;
  position: absolute;
  top: 50%;
  left: 40%;
`

const Header = () => {
  return (
    <Container>
    <Parallax bgImage={img} strength={400}>
      <div style={{ height: 700 }}>
        <Inside>Scroll Down </Inside>
      </div>
      </Parallax>
    </Container>
  )
}

export default Header