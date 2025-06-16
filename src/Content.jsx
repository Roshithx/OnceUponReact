import React from 'react'

const Content = () => {

    const [items, setItems] = React.useState([
  {
    id: 1,
    name: 'Milk',
    quantity: 2,
    isPurchased: false
  },
  {
    id: 2,
    name: 'Bread',
    quantity: 1,
    isPurchased: true
  },
  {
    id: 3,
    name: 'Eggs',
    quantity: 12,
    isPurchased: false
  }

  
] );

const handleCheck =(id)=>{
    const list = items.map((item) => item.id === id ? {...item, isPurchased: !item.isPurchased} : item);
    setItems(list);
}


const handleDelete = (id)=>{
    const list = items.filter((item) => item.id !== id);
    setItems(list);
}
  return (
    <div>
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
    </div>
  )
}

export default Content