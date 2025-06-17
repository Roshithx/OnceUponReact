import React from 'react'

const LineItem = ({item,handleCheck,handleDelete}) => {
  return (
        <li className='item' >
                   <input 
                   type='checkbox'
                   checked={item.isPurchased}
                   onChange={()=>handleCheck(item.id)}
                    />
                    <label onDoubleClick={()=>handleCheck(item.id)} htmlFor="">{item.name}</label>
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
              </li>
  )
}

export default LineItem