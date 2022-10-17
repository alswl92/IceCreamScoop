import React from 'react'
import Header from '../components/Header';
import Categories from '../components/Categories';


const Homepage = ({productItems, handleAddProduct}) => {
  return (
    <>
    <Header/>
    <Categories/>
    </>
  )
}

export default Homepage