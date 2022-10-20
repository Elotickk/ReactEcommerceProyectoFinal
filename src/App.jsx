import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import {BrowserRouter} from 'react-router-dom';
import "./scss/index.scss";
import Main from "./components/main/Main";
import CartProvider from "./components/context/CartContext";


const App = () => {

  return (
    

    <CartProvider>

      <BrowserRouter>
        <Header />
        <Main/>
        <Footer />
      </BrowserRouter>
      

    </CartProvider>
   
  );
};



export default App; 