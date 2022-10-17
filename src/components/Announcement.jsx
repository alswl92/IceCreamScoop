import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: var(--color-red);
    color: white;
    display: flex;
    justify-content: center;
`

const Announcement = () => {
  return (
    <Container>
        Super DEAL! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement