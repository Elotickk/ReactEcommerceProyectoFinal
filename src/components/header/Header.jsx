import React from 'react'
import Navbar from "../nav/Navbar"; 
import estiloH from "./header.module.scss"; 

const Header = () => {
  return (
    <header className={estiloH.HeaderEstilo}>
      <Navbar />
    </header>
  );
};

export default Header;
