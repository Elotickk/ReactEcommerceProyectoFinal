import React from 'react'
import estilosM from "./main.module.scss"; 
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from '../../ItemListContainer/ItemListContainer';
import Home from './Home';
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer';
import Cart from '../cart/Cart';

const Main = () => {
  return (
    <main className={estilosM.MainEstilo}>
      <section className="flexSection">


        <Routes>

          <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/tienda' element={<ItemListContainer/>}/>
          <Route path='/detail/:itemID' element={<ItemDetailContainer/>} />
        
        </Routes>


      </section>
    </main>
  )
}

export default Main