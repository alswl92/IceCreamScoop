import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
height: auto;

`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Nav = styled.div`
    display: flex;
    gap: 1rem;`

const Logo = styled.div`
    font-family: 'Pacifico';
    font-weight: 800;
    font-size: 2.5rem;
    @media screen and (max-width: 600px){
        font-size: 1rem;
    }
    `
const Menu = styled.div`
    display: flex;
    padding-right: 1rem;
    gap: 1rem;
    cursor: pointer;
    `

const Navbar = ({cartItems}) => {
  return (
    <Container>
        <Wrapper>
            <Nav>
                <NavLink style={({isActive})=> {
                    return isActive ? {color: '#2E8364'} : {color: '#E17E76'}}} to ='/IceCreamScoop'>Home</NavLink>
                <NavLink style={({isActive})=> {
                    return isActive ? {color: '#2E8364'} : {color: '#E17E76'}}} to ='/products'>Products</NavLink>
            </Nav>
            <Logo>
            IceCream Scoop
            </Logo>
            <Nav>
            <Menu>
            <NavLink style={({isActive})=> {
                    return isActive ? {color: '#2E8364'} : {}}} to ='/cart'>
                <Badge badgeContent={cartItems.length === 0 ? "" : cartItems.length} color = 'primary'>
                    <ShoppingCartIcon />
                </Badge>
            </NavLink>
            </Menu>
            </Nav>
        </Wrapper>
    </Container>
  )
}

export default Navbar