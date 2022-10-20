import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {BsFillTrashFill} from 'react-icons/bs'

const CarritoProductos = ({product}) => {

    const {eliminarProd} = useContext(CartContext)
    


return (
    <div key={product.id}>

        <div className="containerMedias">
            <div className='containerFlex'>

            <div className='containerCompras'>


                <div className='flexUbicar'>
                    <h3 className='tituloCompra'>{product.title}</h3>
                    <h3 className='precioTitulo'>${product.price}</h3>
                    <h3 className='tituloCategoria'>{product.category}</h3>
                    <h3 className='stockTitulo'>{product.qty}</h3>
                    <img className='productosCarrito' src={product.img} alt="" />
                    <button className='clearButton' onClick={() => eliminarProd(product.id)}>
                        <BsFillTrashFill/>
                    </button>
                </div>



            </div>



        </div>
        </div>

    </div>


    )
}

export default CarritoProductos