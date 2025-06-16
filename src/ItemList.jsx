import React from 'react'

const ItemList = ({items,handleCheck,handleDelete}) => {
  return (
      <ul>
          {items.map((item) => (
              <li className='item' key={item.id}>
                   <input 
                   type='checkbox'
                   checked={item.isPurchased}
                   onChange={()=>handleCheck(item.id)}
                    />
                    <label onDoubleClick={()=>handleCheck(item.id)} htmlFor="">{item.name}</label>
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
              </li>
          ))}
       </ul>
  )
}

export default ItemList