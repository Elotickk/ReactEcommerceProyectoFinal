import React from 'react'
import {Link} from 'react-router-dom'; 
import "../items/items.scss"

const Item = ({item}) => {
    return (
        <div className="productosItems">
            
            <div className="cardProductos">

                <div className='contenedorProductos'>

                    <img src={item.img} alt="" className='imagenProductos'/>


                </div>
                <h5 className='precioColor'>${item.price} </h5>
                <h6>Stock: {item.stock}</h6>
                <Link to={`/detail/${item.id}`}> 
                
                    
                    <button className='estiloBoton'>Ver detalle</button>

                </Link>
                
            </div>

        </div>
    )
}

export default Item