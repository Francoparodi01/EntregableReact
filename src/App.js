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

function App() {
  return (
    <BrowserRouter>
      <NavBar />      
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    );
  }
export default App;