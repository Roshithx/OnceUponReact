import React from 'react'

const AddItem = ({addItem, setAddItem, handleaddItem}) => {
  return (
    <form action="" onSubmit={handleaddItem}>
        {/* <label htmlFor="addItem">Add Item</label> */}
        <input type="text" autoFocus id='addItem' placeholder='Add Item' required value={addItem} onChange={(e)=>setAddItem(e.target.value)} />
        <button type='submit' aria-label='Add'>Add</button>
    </form>
  )
}

export default AddItem