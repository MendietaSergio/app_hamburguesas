import React, {useState} from 'react';
import './App.css';
import Burger from './components/Burger/Burger';
import Cart from './components/Cart/Cart';

function App() {
  
  const [burgers, setBurgers] = useState([
    {id:1, nombre:"Burger completa", precio:250},
    {id:2, nombre:"Burger con Cheddar", precio:180},
    {id:3, nombre:"Burger con Jamón y Queso", precio:150},
    {id:4, nombre:"Burger con Bacon", precio: 200},
    {id:5, nombre:"Burger de pollo completa", precio: 240},
  ])
  const [cart, setCart] = useState([])
  return (
    <>
    <h3>Burgers</h3>
    {burgers.map((burger) =>(
      <Burger
      key={burger.id}
      burger={burger}
      cart={cart}//estado carrito
      setCart={setCart}//modificador de estado carrito
      burgers={burgers}//listado de hamburguesas
      />
    ))}
    <Cart
    cart={cart}
    setCart={setCart}
    />
    </>
  );
}

export default App;
