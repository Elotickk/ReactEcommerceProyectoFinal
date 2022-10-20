import React,{useState,useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../../../src/components/firebase/firebaseConfig";

const ItemDetailContainer = () => {

  const {itemID} = useParams()
  const [product,setProduct] = useState({})
  const [isLoading, setLoading] = useState(true) 


  useEffect(() => {

  const detailCollection = collection(db,"productos");

  const ref = doc(detailCollection,itemID);

  getDoc(ref)
  .then((res) =>{


    setProduct({
      
      id: res.id,
      ...res.data(),
      
    })


  })
  .catch((error) =>{

    console.error(error);


  })
  .finally(() =>{

    setLoading(false);

  })


  },[itemID])


  return (
    
    <div className='contenedorSpinner'>

      {
        isLoading ? <Spinner style={{padding:'25px',marginBottom:'43rem'}} animation="border" role="status" className='spinnerContainer'> 
        <span className="visually-hidden spinner">Loading...</span>
        </Spinner> : <ItemDetail product={product} key={product.id}/>
      }
      
    </div>
  )
}

export default ItemDetailContainer