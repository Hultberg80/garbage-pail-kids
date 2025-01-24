import { useState, createContext } from "react";

const GlobalContext = createContext()

function GlobalProvider({ children }){
    const [cart, setCart] = useState([])

    function addToCart(name) {

        if (!cart.find(item => item.name == name)){
            setCart([...cart, { "name": name, "amount": 1 }])
        } else {
            const tempCart = [...cart]
            const index = tempCart.findIndex(item => item.name == name)
            tempCart[index].amount += 1
            setCart(tempCart)
        }
    }

    function removeFromCart(name) {
        const tempCart = [...cart]
        const index = tempCart.findIndex(item => item.name == name)

        if (!cart.find(item => item.name == name)) {
            alert("Can't find " + name + " in cart!");
        } else if (cart[index].amount > 1) {
            const tempCart = [...cart]
            setCart(tempCart)
        } else if (cart[index].amount <= 1) {
            const newCart = cart.filter((item, i) => i !== index)
            setCart(newCart)
        }
    }

   return <GlobalContext.Provider value={{
    cart,
    addToCart,
    removeFromCart
   }}>
    { children }
   </GlobalContext.Provider>
}

export { GlobalContext, GlobalProvider }