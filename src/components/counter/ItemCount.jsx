import React, {useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import "../counter/count.scss"

const ItemCount = ({stock,onAdd,initial = 1}) => {

    const [count,setCount] = useState(initial) 

    
    useEffect(() =>{ 

        setCount(initial) 

    },[initial]); 


    const sumar = () =>{

        if(count < stock) {   
            
            setCount(count+1)  

        } else {
            
            toast('Máximo de stock', {
                icon: '❗',
            }); 

        }

    

    }


    const restar = () => {


        if(count > 1) {  
            
            setCount(count-1) 

        } else {

            toast.error("No se pueden agregar 0 productos.");

            
        }

    }

    const agregar = () =>{

        onAdd(count)

    }
    

return (
    <div>

        <div className='contenedorContador'>

            <p className='count' style={{fontWeight:'bolder'}}>Cantidad : {count}</p> 
            <button className='botonSumar' onClick={sumar}>+</button>
            <button className='botonRestar' onClick={restar}>-</button>


            <Toaster
                position="bottom-right"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    duration: 2000,

                }}
            />

        </div>
        
        <button className='botonAgregar' onClick={agregar}>

            Agregar al carrito

            
        </button>

    </div>
)
}

export default ItemCount