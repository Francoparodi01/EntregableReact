import React, {  useState } from "react";
import ItemCount from "../ItemCount/index"
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { useCartContext } from "../../context/CartContext";


const ItemDetail = ({ product }) => {

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();
    const navigate = useNavigate();



    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(product, quantity)
    };

    const handleFinish = () => {
        navigate("/Cart"); 
    };


    return (
        <div className="detail-container">
            <img
                className="detail-img"
                src= {product.image}
                alt="product-detail"
            />
            <div className="detail-subcontainer">
                <h1>{product.title}</h1>
                {goToCart 
                ? 
                <button onClick={handleFinish}>Finalizar compra</button>
                :
                    <ItemCount stock={10} initial={1} onAdd={onAdd} />
                }
            </div>
        </div>
    );
};

export default ItemDetail;
