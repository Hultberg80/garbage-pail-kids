import Cards from "./Cards.jsx"
import Navbar from "./Navbar.jsx"



function App() {
  return (
     <div className="navbar">
      <Navbar />
       <div className = "App">
        <div className="cards">
        <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;