import React, {useState} from 'react';
import './App.css';

import { ItemContainer } from './components/Container/ItemContainer';
import { Header } from './components/Header/Header';
import { Footer } from "./components/Footer/Footer"
function App() {
  
  
  const [cart, setCart] = useState([])
  return (
    <>
    <section className="container">
        <Header cart={cart} setCart={setCart}/>
        <ItemContainer cart={cart} setCart={setCart}/>
        <Footer/>
    </section>
    </>
  );
}

export default App;
