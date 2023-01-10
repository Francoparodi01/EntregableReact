import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import  CartProvider  from "./context/CartContext"


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <CartProvider>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
    );
  }
export default App;