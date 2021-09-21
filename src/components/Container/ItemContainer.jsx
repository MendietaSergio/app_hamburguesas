import React,{ useState} from "react";
import Burger from "../Burger/Burger";
import Cart from "../Cart/Cart";
export const ItemContainer = ({
  cart,
  setCart
}) => {

  const [burgers, setBurgers] = useState([
    {id:1, image:"Chicken.png", nombre:"Chicken", precio:250},
    {id:2, image:"Criolla.png", nombre:"Criolla", precio:180},
    {id:3, image:"Patagonia.png", nombre:"Patagonia", precio:150},
    {id:4, image:"Porteña.png", nombre:"Porteña", precio: 200},
    {id:5, image:"Salteña.png", nombre:"Salteña", precio: 240},
  ])


  return (
    <>
      <section className="container_content">
        <div className="container_content_title">
          <h1>Aprovechá solo por tiempo limitado combos 50% OFF!</h1>
        </div>
        <div className="container_content_listBurgers">
          {burgers.map((burger) => (
            <Burger
              key={burger.id}
              burger={burger}
              cart={cart} //estado carrito
              setCart={setCart} //modificador de estado carrito
              burgers={burgers} //listado de hamburguesas
            />
          ))}
        </div>
      </section>
    </>
  );
};
