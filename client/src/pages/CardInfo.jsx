import { useEffect, useState } from "react";
import { useParams } from "react-router"
import CardList from "../components/CardList";

export default function CardInfo(){
    const [card, setCard] = useState(undefined)
    const { cardId } = useParams()

    useEffect(() => {
        const cardData = CardList.find(card => card.id == cardId)
        setCard(cardData)
}, [])

return !card ?
<p>Could not find Card!</p>
:
<section id="cardinfo">
    <h1>{card.name}</h1>
    <img src={card.img} alt={card.name} />
    <p>{card.name}</p>
</section>
}