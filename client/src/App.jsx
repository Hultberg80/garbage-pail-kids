import Cards from "./components/Cards.jsx"
import Navbar from "./Navbar.jsx"
import Cart from "./components/Cart.jsx"



function App() {
  return ( <>
     <div className="navbar">
      <Navbar />
       <div className = "App">
      </div>
      <div className="cards">
        <Cards />
      </div>
    </div>
    <div className="cart">
    <Cart />
    </div>
    </>
  );
}

export default App;