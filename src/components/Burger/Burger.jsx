import React from "react";
//paso por parametros el estado de burgers y cart.
//paso por parametros el seteo de cart
//paso por parametro la burger mapeada
const Burger =({
    burger,
    cart,
    setCart,
    burgers
}) =>{
    
    const {nombre, precio, id} = burger;

    const addBurger = (id) =>{
        //filtro por id la burger
        const burger = burgers.filter((burger) => burger.id === id)
        //agrego al carrito la burger
        setCart([...cart, ...burger])
    }
    //funcion para eliminar una hamburguesa
    const delBurger =( )=>{
        const burgers = cart.filter(burger => burger.id !==id)
        setCart(burgers)
    }
    return(
        <>
        <div>
            <ul>
                <li>{nombre}</li>
                <li>{precio}</li>
                {burgers ? 
                (<button type="button" onClick={()=>addBurger(id)}>Agregar al carrito</button>):
                (<div>
                <button type="button" onClick={()=>delBurger(id)}>
                    Confirmar
                </button>
                <button type="button" onClick={()=>delBurger(id)}>
                    Eliminar
                </button>
                </div>)}

              
            </ul>
        </div>
        </>
    )
}
export default Burger;