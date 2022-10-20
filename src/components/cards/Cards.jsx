import React from 'react'
import './cards.scss'
import imagenCpu from '../../img/cpu.png'
import imagenRam from '../../img/RGB-Ram-Transparent.png'
import imagenGpu from '../../img/gpuamd.png'
import { Link } from "react-router-dom";
import "animate.css";


const Cards = () => {
  return (
    <div className='contenedorTarjetas'>

      <Link to="/category/procesador" className='nav-link fw-bold text-black link'>
      <div className="tarjeta animate__animated animate__bounceIn">
        
        <h2><img src={imagenCpu} alt="" className='imagenEstilo imagenEstiloCPU'/>CPU</h2>

      </div>
      </Link>
      <Link to="/category/Ram" className='nav-link fw-bold text-black link'>
      <div className="tarjeta animate__animated animate__bounceIn">

        <h2><img src={imagenRam} alt="" className='imagenEstilo'/>Ram</h2>

      </div>
      </Link>
      <Link to="/category/gpu" className='nav-link fw-bold text-black link'>
      <div className="tarjeta animate__animated animate__bounceIn">

        <h2><img src={imagenGpu} alt="" className='imagenEstilo imagenVariedad'/>GPU</h2>

      </div>
      </Link>


    </div>

    


  )
}

export default Cards