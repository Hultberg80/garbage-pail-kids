const Navbar = () => {
    return (  
        <nav className="nav">
            
            <div className="links">
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: '8px'
                }}>Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                 }}>Cards</a>
            </div>
            <h1>Welcome to Garbage Pail Kids</h1>
        </nav>
    );
}
 
export default Navbar;