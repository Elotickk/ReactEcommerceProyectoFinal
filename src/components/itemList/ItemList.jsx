import React from 'react'
import Item from '../items/Item';



const ItemList = ({estado}) => {
  return (
    <div>
        <div>

          <h2 style={{fontWeight:'bolder'}}>Productos</h2>
          {

            estado.map((produ) => { 

              return( 
              
                <Item item={produ} key={produ.id}/>

              );
              

            })

          }

        </div>
    </div>
  )
}

export default ItemList