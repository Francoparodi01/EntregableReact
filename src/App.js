import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenido a mi app de React"}></ItemListContainer>
    <ItemDetailContainer/>
    </>
  );
}

export default App;