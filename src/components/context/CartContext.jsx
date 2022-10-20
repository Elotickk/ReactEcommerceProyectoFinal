import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();  

const CartProvider = ({children}) => {

    const [cart,setCart] = useState([]) 

    const addItem = (item,qty) =>{ 

      if (isInCart(item.id)) { 

        sumarCantidad(item,qty) 
        
      } else { 
        
        setCart([...cart,{...item,qty}]); 
        
      }

    }

 
    
    const clearCart = () => {

      setCart([]); 

    }


    

    const isInCart = (id) =>{ 

      return cart.some((prod) => prod.id === id) 

    }

   

    const eliminarProd = (id) =>{

      const carritoFiltrado = cart.filter((prod) => prod.id !== id); 

      setCart(carritoFiltrado); 
    }


    

    const sumarCantidad = (item,qty) =>{ 

      const carritoActualizado = cart.map((prod) =>{ 

         
        if (prod.id === item.id) { 

          const productoActualizado = {  

            ...prod, 
            qty: qty, 

          }

          return productoActualizado; 
          
        } else { 

          return prod; 
          
        }

      }); 

      setCart(carritoActualizado)  


    }

    

    const getProductQuantity = (id) =>{ 

      const product = cart.find((prod) => prod.id === id) 

      return product?.qty; 

    }

    

    const totalPrice = () =>{

      let acumulador = 0; 

      cart.forEach((prod) => { 

        acumulador += prod.price * prod.qty 

      })

      return acumulador; 


    }

   
    const totalProductos = () =>{

      return cart.length;


    }


    return( 
    <CartContext.Provider value={{cart,addItem,clearCart,eliminarProd,getProductQuantity,totalPrice,totalProductos}}> 

      {children} 

    </CartContext.Provider>
  ) 
  
}

export default CartProvider