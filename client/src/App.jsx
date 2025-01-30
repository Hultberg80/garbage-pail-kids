import Cards from "./components/Cards.jsx"
import Navbar from "./Navbar.jsx"
import Cart from "./components/Cart.jsx"
import { GlobalProvider } from "./GlobalContext.jsx";



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
      <GlobalProvider>
        <Cart />
        </GlobalProvider>
    </div>
    </>
  );
}

export default App;