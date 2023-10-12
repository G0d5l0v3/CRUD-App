const initialItems = [
  {
    id: 1,
    description: "Passport",
    quantity: 12,
    packed: false,
  },
  {
    id: 1,
    description: "Socks",
    quantity: 12,
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
    <div className=" flex items-center justify-center font-[nunito] font-bold text-sm text-[#f5f8f9] bg-[#363535] text-center h-[10svh]">
      <h1> Far Away 💼</h1>
    </div>
  );
}

function Form() {
  return (
    <div className="flex items-center justify-center font-[nunito] bg-white h-[20svh] text-sm">
      <p className="">What do you need for your trip 🤔? </p>
    </div>
  );
}

function PackagingList() {
  return (
    <div className="flex items-center justify-center font-[nunito] bg-[#f0f3f4] h-[60svh] text-sm">
      LIST
    </div>
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
