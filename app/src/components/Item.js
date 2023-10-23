import React from "react";

const Item = ({ itemEntered, deleteItem, updateItemChecked }) => {

  return (
    <div
      className={`font-[nunito] text-xl ${
        itemEntered.packed ? "line-through" : ""
      }`}
    >
      <div className="flex gap-1 ">
        <input type="checkbox" value={itemEntered.packed} onChange={() => updateItemChecked(itemEntered.id)} />
        <h1>{itemEntered.quantity}</h1>
        <h1>{itemEntered.description}</h1>
        <p
          className="cursor-pointer"
          onClick={() => deleteItem(itemEntered.id)}
        >
          ❌
        </p>
      </div>
    </div>
  );
};

export default Item;
