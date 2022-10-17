import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Announcement from './components/Announcement';
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import data from './Data'
import Cart from './pages/Cart'
import Products from './pages/Products';


function App() {
  const {productItems} = data;
  const [cartItems, setCartItems] = useState([]);

  function handleAddProduct(product){
    const ProductExist = cartItems.find((item)=> item.id === product.id);
    if (ProductExist){
        setCartItems(
          cartItems.map((item)=>
                item.id === product.id
                ? {...ProductExist, quantity: ProductExist.quantity + 1}
                : item
            )
        );
    } else{
        setCartItems([...cartItems, {...product,quantity:1}]);
    }
}

function handleRemoveProduct(product){
  const ProductExist = cartItems.find((item)=> item.id === product.id);
  if (ProductExist.quantity === 1){
    setCartItems(cartItems.filter((item)=> item.id !== product.id));
  }else{
    setCartItems(
      cartItems.map((item)=> item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1} : item)
    );
  }
}

  return (
    <div>
      <BrowserRouter>
        <Announcement/>
        <Navbar cartItems = {cartItems}/>
        <Routes productItems = {productItems} cartItems = {cartItems} handleAddProduct = {handleAddProduct} handleRemoveProduct ={handleRemoveProduct}>
            <Route path='/' element = {
            <Homepage 
            productItems={productItems} 
            handleAddProduct = {handleAddProduct}/>} />
            <Route path ='/cart' element = {
            <Cart 
            cartItems = {cartItems} 
            handleAddProduct = {handleAddProduct} 
            handleRemoveProduct = {handleRemoveProduct} />} />
            <Route path ='/products' element = {
            <Products productItems = {productItems} 
            handleAddProduct ={handleAddProduct}/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
