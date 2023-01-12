import { BiCart } from "react-icons/bi";
// import { useCartContext } from '../../context/CartContext';
;


const CartWidget = () => {
  //const { totalProducts } = useCartContext();
  return (
    <> 
    <BiCart id='CarritoLogo' size={50}/>
    </>
  )
  // Esto seria para agregar el numero de items en el carrito pero no lo estoy pudiendo lograr<span> {totalProducts() || ""} </span>
}

export default CartWidget;