import { useContext, useState } from "react";
import { ListNameContext } from "../App";

const Card = ({ id, description, name, listId }) => {
    const [list, , handleMoveCard, handleEditCard] = useContext(ListNameContext);

    const [title, setTitle] = useState(name);
    const [desc, setDesc] = useState(description);

    const renderOptions = () => {
        return list.map(({ name, id }) => (<option value={id}>{name}</option>))
    }

    const handleSaveCard = () => {
        handleEditCard({
            name: title,
            description: desc,
            id,
        }, listId)
    }

    const isChanged = () => title !== name || desc !== description;

    return <div className="card">
        <div>
            <input className="u-full-width" type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Enter a title for this card..." />
        </div>
        <div>
            <textarea className="u-full-width" onChange={(e) => setDesc(e.target.value)} aria-expanded='false' value={desc} placeholder="Enter a description for this card..."></textarea>
        </div>
        <div>
            <select onChange={(e) => handleMoveCard(e.target.value, id)} className="u-full-width">
                <option disabled selected>Move...</option>
                {renderOptions()}
            </select>
        </div >
        {isChanged() && <button onClick={handleSaveCard} className="u-full-width" type="text"> Save</button>}
    </div >
}

export default Card;