import React from 'react'
import styled from 'styled-components'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    margin-top: 1rem;
    @media screen and (max-width: 1024px){
        grid-template-columns: repeat(2,1fr);
    }
    @media screen and (max-width: 600px){
        grid-template-columns: 1fr;
    }
`

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 95%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.2);
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
`

const Item = styled.div`
    min-width: 280px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    

    &:hover ${Info}{
        opacity: 1;
    }
`

const Image = styled.img`
  height: 70%;
  z-index: 2;
  background-color: var(--color-yellow);
`


const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: var(--transition);
    cursor: pointer;

    &:hover{
        background-color: var(--color-pink);
        transform: scale(1.1);
    }
`;

const Price = styled.div`
    color: white;
`


const Products = ({handleAddProduct, productItems }) => {
  return (
    <Container id = 'products' >
        {productItems.map((productItem) => (
        <Item key={productItem.id}>
            <Image src = {productItem.image} alt = {productItem.name}/>
            {productItem.name}
            
            <Info>
                <Price>${productItem.price}</Price>
                <Icon>
                    <AddShoppingCartIcon onClick = {() => {handleAddProduct(productItem);}}/>
                </Icon>
            </Info>
        </Item>
        ))}

    </Container>
  )
}

export default Products