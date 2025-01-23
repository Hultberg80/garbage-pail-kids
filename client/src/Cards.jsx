import { useState } from "react";
import CardList from "./CardList";

const Cards = () => {
    const [cards, setCards] = useState([
        { name: "Adam", img: "/Images/Adam.jpg", id: 1 },
        { name: "Ailin", img: "/Images/Ailin-Al.png", id: 2 },
        { name: "Amazin", img: "/Images/Amazin-Grace.jpg", id: 3 },
        { name: "Apple", img: "/Images/Apple-Cory.jpg", id: 4 },
        { name: "Armpit", img: "/Images/Armpit-Britt.jpg", id: 5 },
        { name: "Babbling", img: "/Images/Bad-Breath-Seth.jpg", id: 6 },
    ]);
   
    

    return ( 
        <div className="cards">
            <h2>All cards</h2>
            <div className="card-list">
                {cards.map((card) => (
                    <div className="card-preview" key={card.id}>
                        <img src={card.img} alt={card.name} />
                        <p>{card.name}</p>
                    </div>
                ))}
            </div>
        </div>
     )
}
 
export default Cards;