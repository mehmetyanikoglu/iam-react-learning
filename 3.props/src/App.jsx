import { useState } from 'react'
import './App.css'
import Product from './product'
import Container from './container';

function App() {

  const productName="buzdolabı";
  const price=1200;

  return (
    <>
      <div>
        <Container>
        <Product productName="Ayakkabııı" price={5000} />
        </Container>
        <hr/>
        <Product productName="Pantolon" price={2000}/>
        <hr/>
        <Product productName= {productName} price={price}/>
        
      </div>

    </>
  )
}

export default App
