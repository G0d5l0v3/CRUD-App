import React from "react";

const Stats = ({itemEntered}) => {
  const amountOfItems = itemEntered.length
  const amountPacked = itemEntered.filter((item) => item.packed).length
  const percentReady = `${Math.round(parseInt((amountPacked/amountOfItems) * 100))}%`
  return (
    <div>
    <p className="flex items-center justify-center">
        <em>
          You have {amountOfItems} items on your list and have packed {amountPacked} items and are {itemEntered.length === 0 ? "0%" : percentReady} ready
          to move
        </em>
      </p>
    </div>
  );
};

export default Stats;
