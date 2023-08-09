import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar>

      </Navbar>

      {/* ItemListContainer */ }
      <ItemListContainer greeting="Bienvenidos a Ringo" ></ItemListContainer>
    </div>
  )
}

export default App
