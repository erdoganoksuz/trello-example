import { useState } from "react";
import ListHeader from "../ListHeader";

const AddList = ({ onNewListAdd }) => {

    const [listName, setListName] = useState("");


    const handleClick = () => {
        onNewListAdd(listName);
        setListName("");
    }

    return <div className="list">
        <ListHeader onChange={(e) => setListName(e.target.value)} val={listName} />
        <button onClick={handleClick} className="u-full-width">Add another list</button>
    </div >;
}

export default AddList;