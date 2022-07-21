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
      <ItemListContainer />
      {/* <ItemDetailContainer /> */}
    </>
  );
}

export default App;
