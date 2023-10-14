import React, { useState } from "react";

const initialItems = [
  {
    id: 1,
    description: "Passport",
    quantity: 3,
    packed: false,
  },
  {
    id: 2,
    description: "Socks",
    quantity: 5,
    packed: true,
  },
  {
    id: 3,
    description: "Socks",
    quantity: 5,
    packed: false,
  },
];

function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackagingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center justify-center font-[nunito] font-bold text-sm text-[#f5f8f9] bg-[#363535] text-center h-[10svh]">
      <h1> Far Away 💼</h1>
    </div>
  );
}

function Form() {
  const [text, setText] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      text,
      quantity,
      packed: false,
      id: Date.now()
    }
    setText("")
    setQuantity(1)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-5 font-[nunito] bg-white h-[20svh] text-sm"
    >
      <p>What do you need for your trip 🤔? </p>
      <select
        className="bg-[#f0f3f4] px-3 py-1 rounded-lg"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>{" "}
      <input
        type="text"
        placeholder="item..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-[#f0f3f4] text-center rounded-lg py-1"
      />
      <button className="bg-[#363535] text-white px-3 py-1 rounded-md">
        Add
      </button>
    </form>
  );
}

function PackagingList() {
  return (
    <div>
      <ul
        className="flex space-x-10 justify-center
      py-[1rem] px-[10%] font-[nunito] bg-[#f0f3f4] h-[60svh] text-sm"
      >
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  const [isDeleted, setisDeleted] = useState(false);
  const handleDelete = () => {
    setisDeleted(true);
  };

  return !isDeleted ? (
    <li>
      <span className={item.packed ? "line-through" : ""}>
        {item.quantity} {item.description}
      </span>
      <button className="pl-[1rem]" onClick={handleDelete}>
        ❌
      </button>
    </li>
  ) : (
    ""
  );
}
function Stats() {
  return (
    <div className="flex items-center justify-center font-[nunito] bg-[#363535] text-white h-[10svh]">
      <h1>
        <em>You have X items on your list, you have already packed X (X%)</em>
      </h1>
    </div>
  );
}
export default App;
