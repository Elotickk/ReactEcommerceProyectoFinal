import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import ItemCount from '../counter/ItemCount'
import "./itemDetail.scss";


const ItemDetail = ({product}) => {

  const [cantidad,setCantidad] = useState(0);

  const {addItem,getProductQuantity} = useContext(CartContext);


  const notify = () => toast.success('Se agrego al carrito');

  const onAdd = (cantidadItem) =>{

    setCantidad(cantidadItem); 
    addItem(product,cantidadItem); 
    notify()
    

  }

  const quantity = getProductQuantity(product.id) 
  

  return (
    <div className='estilosBoton'>

      <div className="wrapper">
        <div className="product-img">
          <img src={product.img} className="imgProducto"></img>
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{product.title}</h1>
            <p>{product.description} </p>
          </div>
          <div className="product-price-btn">
            <p className='spanPrice'>Precio: ${product.price}</p>
            
            {
              cantidad === 0 ? <ItemCount stock={product.stock} initial={quantity} onAdd={onAdd} /> : <Link to="/cart" className='verCarrito'>Ver carrito</Link>
            }

            <Toaster 
              position='bottom-right'
              toastOptions={{

                duration:2000,
                style: {

                  fontWeight:'bolder'

                },
              }}
            />

          </div>
        </div>
      </div>

    </div>
    )
  }

export default ItemDetail

