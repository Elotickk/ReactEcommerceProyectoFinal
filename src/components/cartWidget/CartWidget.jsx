import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import "./cartWidget.scss";

const CartWidget = () => {

  const {totalProductos} = useContext(CartContext);


  return (

    <div className="containerCarrito">

      <span className="sizeCart"><AiOutlineShoppingCart /></span>
      <span className="colorNumber">{totalProductos() === 0 ? "" : totalProductos()}</span>

    </div>
    
    
  );
};

export default CartWidget;
