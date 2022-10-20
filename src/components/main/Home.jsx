import React from 'react'
import Texto from './Texto';
import Cards from "../cards/Cards";
import CardCliente from "../cards/CardCliente";

const Home = () => {
  return (
    <div>

        <Texto test={"Categorias de nuestros productos"} />
        
        <Cards/>

        <CardCliente/>

    </div>
  )
}

export default Home