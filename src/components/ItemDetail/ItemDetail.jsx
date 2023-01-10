import React, {  useState } from "react";
import  ItemCount  from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { useCartContext } from "../../context/CartContext";


const ItemDetail = ({ product }) => {

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext;
    const navigate = useNavigate();



    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(product, quantity)
    };

    const handleFinish = () => {
        const productToSave = {...product, quantity: goToCart}

        navigate("/cart");
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
                    <link to="/cart">Finalizar compra</link>
                 : 
                    <ItemCount stock={10} initial={1} onAdd={onAdd} />
                }
            </div>
        </div>
    );
};

export default ItemDetail;
