import React, { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from "../../../src/components/firebase/firebaseConfig";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./form.scss"



const Formulario = ({cart,total,clear,handleId}) => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');


  const handleSubmit = (event) => {

    event.preventDefault();  

    const order = { 

      buyer: {nombre: nombre, apellido: apellido, email: email, telefono: telefono},
      items: cart,
      total: total,
      date:  serverTimestamp(),


    };

    const ordersCollection = collection(db,'orders'); 

    addDoc(ordersCollection, order) 
    .then((res) => {

      handleId(res.id);  
      clear();

    });

};

  const handleChangeNombre = (event) => {

    setNombre(event.target.value); 

  }

  const handleChangeApellido = (event) => {

    setApellido(event.target.value); 

  }

  const handleChangeEmail = (event) => {

    setEmail(event.target.value); 

  }

  const handleChangeTelefono = (event) => {

    setTelefono(event.target.value); 

  }


  return (
    <div>
      <Form className='formularioFlex' onSubmit={handleSubmit}>
      <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control className='fw-bolder' type="text" placeholder="Nombre" name="nombre" value={nombre} onChange={handleChangeNombre} required/>
      </Form.Group>

      <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
        <Form.Label>Apellido</Form.Label>
        <Form.Control className='fw-bolder' type="text" placeholder="Apellido"  name="apellido" value={apellido} onChange={handleChangeApellido} required/>
      </Form.Group>

      <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control className='fw-bolder' type="email" placeholder="Email"  name="email" value={email} onChange={handleChangeEmail} required/>
      </Form.Group>

      <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
        <Form.Label>Telefono</Form.Label>
        <Form.Control className='fw-bolder' type="tel" placeholder="Telefono"  name="telefono" value={telefono} onChange={handleChangeTelefono} required/>
      </Form.Group>

      <Button variant="dark" type="submit" className='fw-bolder'>
        Finalizar compra
      </Button>
    </Form>
    </div>
  )
}

export default Formulario