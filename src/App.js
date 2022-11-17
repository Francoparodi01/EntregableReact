import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetail from './components/ItemDetail/ItemDetail';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenido a mi app de React"}></ItemListContainer>
    <ItemDetail></ItemDetail>
    </>
  );
}

export default App;