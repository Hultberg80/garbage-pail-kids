const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Garbage Pail Kids</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                 }}>Cards</a>
            </div>
        </nav>
    );
}
 
export default Navbar;