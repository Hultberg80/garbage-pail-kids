import CardList from "../components/CardList";
import Cards from "../components/Cards.jsx"

export default function Home() {
    return <section className="page">
        <h1>Garbage Pail Kids</h1>
        <CardList listOfCards={Cards} />
    </section>
}