import Cart from "../Cart/Cart";

export const Header = ({
  cart,
  setCart
}) => {
  return (
    <>
    
      <section className="container_header">
          <div className="container_header_menu">
              <button className="container_header_menu--boton"></button>
          </div>
          <div className="container_header_title">
            <h3 className="container_header_title-text">HAMBURGER</h3>
          </div>
          <div className="container_header_cartDiv">
            <Cart cart={cart} setCart={setCart}/>
          </div>
      </section>
    </>
  );
};
