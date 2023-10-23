import React from 'react'
import Item from './Item'

const PackagingList = ({itemEntered, deleteItem, updateItemChecked }) => {

  return (
    <div className="grid grid-cols-4 place-items-center h-[60svh] bg-[]">
      {itemEntered.map((items) => <Item itemEntered={items} deleteItem = {deleteItem} updateItemChecked={updateItemChecked} key={items.id} />)}
    </div>
  )
}

export default PackagingList