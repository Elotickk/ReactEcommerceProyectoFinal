import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import carritoVacio from '../../img/cartVacio.png'
import CarritoProductos from './CarritoProductos';
import "./carrito.scss";
import Formulario from '../form/Formulario';
import { useState } from 'react';
import gracias from "../../img/Gracias_por_su_compra.png"

const Cart = () => {

    const [idCompra, setIdCompra] = useState('');
    const [form,setForm] = useState(false);
    const {cart,clearCart,totalPrice} = useContext(CartContext);

    const total = totalPrice();
    

    const handleId = (id) => {

      setIdCompra(id);

    };

    const handleClick = () =>{

      setForm(true)

    }

    if(idCompra){

      return <div className='codReferencia'>
        <img className='graciasCompra' src={gracias} alt="" />
        <h1 className='codigo__Compra'>Tu código de referencia es: {idCompra} </h1>
        <Link to="/tienda" className='linkDesea'>
        
          ¿Desea seguir comprando?

        </Link>
      </div>
    
    }

    if(form){

      return(
        <Formulario cart={cart} total={total} clear={clearCart} handleId={handleId} />
      )

    }

  
    if(cart.length === 0){

      return(
        <div>
          <div className='flexVacio'>
            <h2 style={{fontWeight:'bolder'}}>Carrito Vacío</h2>
            <img src={carritoVacio} alt="" className='cartVacio' />
            <Link to="/tienda" className='linkCondition'>

              Empeza a comprar

            </Link>
          </div>
          
        </div>
      )

    }


  return (
    <div>

        <h2 className='carritoTitulo'>Carrito</h2>

        {

          cart.map((product) => {

            return(

              <CarritoProductos product={product} key={product.id}/>

            );

          })

        }

        <div className='containerButton'>
          <div className="contenedorBotones">
          <button className='clearCart' onClick={clearCart}>🗑️ Vaciar</button>
          <button className='botonCheckout' onClick={handleClick}>Checkout</button>
          <h4 className='totalPrice' style={{fontWeight:'bolder'}}>Total: $ {totalPrice()} </h4>
          </div>
        </div>

        
        



    </div>
  )
}

export default Cart