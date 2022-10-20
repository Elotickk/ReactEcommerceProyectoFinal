import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import "animate.css";
import Spinner from 'react-bootstrap/Spinner'
import ItemList from "../components/itemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../src/components/firebase/firebaseConfig";



const ItemListContainer = () => { 

  const {categoryID} = useParams();  

  
  const [productos,setProductos] = useState([]) 
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {

    const itemCollection = collection(db,"productos");

    const q = query(itemCollection,where("category","==",`${categoryID}`)); 

    const filtrado = categoryID ? q : itemCollection;
    
    getDocs(filtrado)

    .then((resp) => {
      
      const products = resp.docs.map((produ)=>{

        return{ 
          
          ...produ.data(), 
          id: produ.id, 


        };

      });

      setProductos(products);
      setLoading(false)


    })
    .catch((error) =>{
      console.error(error);
    })
    return(

      setLoading(true)

    )


  },[categoryID]) 

  


  return (
    
    <div className="contenedorSpinner">

      {
        isLoading ? <Spinner style={{padding:'25px',marginBottom:'41rem'}} animation="border" role="status" className="spinnerContainer"> 
        <span className="visually-hidden spinner">Loading...</span>
        </Spinner> : <ItemList estado={productos}/>
      }

    </div>
    
  );
};

export default ItemListContainer;
