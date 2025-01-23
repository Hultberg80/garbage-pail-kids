import { useState } from "react";
import CardList from "./CardList";
import Adam from "/Images/Adam.jpg";

const Cards = () => {
    const [cards, setCards] = useState([
        {name: "Adam", img: <img src={Adam}/>, id: 1},
        {name: "Ailin", img: <img src="/Images/Ailin-Al.png"/>, id: 2},
        {name: "Amazin", img: <img src="/Images/Amazin-Grace.jpg"/>, id: 3},
        {name: "Apple", img: <img src="/Images/Apple-Cory.jpg"/>, id: 4},
        {name: "Armpit", img: <img src="/Images/Armpit-Britt.jpg"/>, id: 5},
        {name: "Babbling", img: <img src="/Images/Bad-Breath-Seth.jpg"/>, id: 6},
    ])
   
    

    return ( 
        <div className="cards">
            <CardList cards={cards} name="All cards" />
        </div>
     )
}
 
export default Cards;