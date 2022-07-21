import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <>
      <NavBar />

      {/* <ItemCount /> */}
      {/* <ItemListContainer greeting={"Bienvenidos a Surfar - Tiendita"} /> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
