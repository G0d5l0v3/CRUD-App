import React, { useState } from "react";

const Form = ({addNewItem}) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);


  function handleSubmit(e) {
    e.preventDefault();
    if(!description) return
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    addNewItem(newItem)
    setDescription("");
    setQuantity(1);
  }
 
 
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center gap-3 items-center font-[nunito] h-[10svh]"
      >
        <h1><em>What are we packing today !</em></h1>
        <select className="px-[2rem] bg-[#e8f0fe] rounded-md" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num}>{num}</option>
          ))}
        </select>
        <input type="text" value={description} className="bg-[#e8f0fe] text-center rounded-md" onChange={(e) => setDescription(e.target.value)} />
        <button className="px-[2rem] py-[0.5rem] bg-black text-white rounded-md">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Form;
