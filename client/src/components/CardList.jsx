import Cards from "../components/Cards.jsx";


const CardList = ({cards, name}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return ( 
        <div className="card-list">
            <h2>{ name }</h2>
            {cards.map((card) => (
            <div className="card-preview" key={card.id}>
            </div>
          ))}
        </div>
     );
}
 
export default CardList;