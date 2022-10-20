import React from 'react'

const Texto = ({test}) => {
  return (
    <div>

        <h2 style={{ fontWeight: "bolder",color:'black' }} className="animate__animated animate__bounceIn">Bienvenidos a CTA Gaming</h2>

        
        <h2 style={{ fontWeight: "bolder", color:'black' }} className="animate__animated animate__bounceIn">{test}</h2>

    </div>
  )
}

export default Texto