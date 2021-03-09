import { createContext, useEffect, useMemo, useState } from "react";
import AddList from "./AddList";
import List from "./List";
import ListModels from "./services/Models";
import LocaleStorage from "./services/LocaleStorage";


export const ListNameContext = createContext();

const App = () => {
  const { getEmptyList, getEmptyCard } = useMemo(() => new ListModels(), []);
  const { getItem, setItem } = useMemo(() => new LocaleStorage(), []);

  useEffect(() => setItem(lists));

  const [lists, setLists] = useState(getItem() || []);

  const handleNewListAdd = (name) => {
    setLists([...lists, getEmptyList(name)])
  }

  const renderLists = () => {
    return lists.map(({ id, name, cards }) => (
      <List id={id} name={name} cards={cards} />
    ))
  }

  const handleAddNewCard = (listId) => {
    setLists(lists.map((list) => {
      if (list.id === listId) list.cards.push(getEmptyCard());
      return list
    }
    ))
  }

  const handleMoveCard = (listId, cardId) => {
    let foundListIndex;
    let foundCard;

    lists.forEach((list, index) => {
      if (list.id === listId) foundListIndex = index;

      let findCardIndex;

      if (!foundCard)
        foundCard = list.cards.find((card, index) => {
          if (card.id === cardId) {
            findCardIndex = index;
            return true;
          };
        });

      if (Number.isInteger(findCardIndex)) {
        list.cards.splice(findCardIndex, 1)
      }

      if (foundListIndex && foundCard) return false //break;
      return true;
    });

    lists[foundListIndex].cards.push(foundCard);

    setLists([...lists]);
  }

  const handleEditCard = (val, listId) => {
    setLists(lists.map((list) => {

      list.cards = list.cards.map(card => {
        if (card.id === val.id) card = val;
        return card;
      });

      return list;
    }))
  }

  const handleEditHeader = (id, val) => {
    setLists(lists.map((list) => {
      if (list.id === id) list.name = val;
      return list;
    }))
  }

  return (
    <div className="App">
      <h1>Todo Board</h1>
      <div className="card-container">
        <ListNameContext.Provider value={[lists, handleAddNewCard, handleMoveCard, handleEditCard, handleEditHeader]}>
          {renderLists()}
        </ListNameContext.Provider>
        <AddList onNewListAdd={handleNewListAdd}></AddList>
      </div>
    </div>
  );
}

export default App;
