import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 1rem;
    background-color: var(--color-green);
`

const Wrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: white;
`

const Item = styled.div`
    min-width: 280px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `

const Image = styled.img`
  height: 70%;
  z-index: 2;
`
const BtnWrap = styled.div`
    display: flex;
    gap: 1rem;
`
const Btn = styled.button`
    cursor: pointer;
    font-size: 1rem;
    width: 3rem;
    background-color: white;
    
    &:hover{
        background-color: rgba(0,0,0,0.6);
    }
`

const Cart = ({cartItems, handleAddProduct, handleRemoveProduct}) => {
    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price, 0
    )
  return (
    <Container id = 'cart'>
        {cartItems.length === 0 && (
            <div>No items are added.</div>
        )}

        <Wrap>
            {cartItems.map((item)=> (
                <Item key = {item.id}>
                    <Image src = {item.image} alt = {item.name}/>
                    {item.name}
                    <BtnWrap>
                        <Btn onClick = {() => handleAddProduct(item)}>+</Btn>
                        <Btn onClick={()=> handleRemoveProduct(item)}>-</Btn>
                    </BtnWrap>
                    <div>{item.quantity} * ${item.price}</div>
                </Item>
            ))}
        </Wrap>
        Total Price $ {totalPrice}
    </Container>
  )
}

export default Cart;
