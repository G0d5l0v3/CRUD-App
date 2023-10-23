import React, { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackagingList from "./PackagingList";
import Stats from "./Stats";

function App() {
  const [itemEntered, setItemEntered] = useState([]);

  function addNewItem(newItem) {
    return setItemEntered((itemEntered) => [...itemEntered, newItem]);
  }
  function deleteItem(id) {
    return setItemEntered((itemEntered) =>
      itemEntered.filter((item) => item.id !== id)
    );
  }
  function updateItemChecked(id) {
    return setItemEntered((itemEntered) =>
      itemEntered.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }


  return (
    <div>
      <Logo />
      <Form addNewItem={addNewItem} />
      <PackagingList
        itemEntered={itemEntered}
        deleteItem={deleteItem}
        updateItemChecked={updateItemChecked}
      />
      <Stats itemEntered={itemEntered} />
    </div>
  );
}
export default App;
