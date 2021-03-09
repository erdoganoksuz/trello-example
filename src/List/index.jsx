import { useContext, useState } from "react";
import { ListNameContext } from "../App";
import Card from "../Card"
import ListHeader from "../ListHeader";

const List = ({ id, name, cards }) => {

    const [, addNewCard, , , handleEditHeader] = useContext(ListNameContext);

    const [header, setHeader] = useState(name);

    const renderCards = () => {
        return cards.map(({ id: cardId, name, description }) => (
            <Card key={id} id={cardId} listId={id} name={name} description={description} />
        ))
    };

    const handleAddNewCard = () => {
        addNewCard(id);
    }

    const handleHeader = (e) => {
        const val = e.target.value;
        setHeader(val)
        handleEditHeader(id, val);
    }

    return <div className="list">
        <ListHeader onChange={handleHeader} val={header}></ListHeader>
        {renderCards()}
        <button onClick={handleAddNewCard} className="u-full-width" type="text"> Add another card</button>
    </div>;
}

export default List;