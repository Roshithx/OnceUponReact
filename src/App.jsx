
import AddItem from './AddItem';
import './App.css'
import Content from './Content'
import Footer from './Footer';
import Header from './Header'
import React from 'react';

function App() {
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

const [addItem, setAddItem] = React.useState('');


const handleCheck =(id)=>{
    const list = items.map((item) => item.id === id ? {...item, isPurchased: !item.isPurchased} : item);
    setItems(list);
}

const addItemHandler = (e)=>{

}

const handleDelete = (id)=>{
    const list = items.filter((item) => item.id !== id);
    setItems(list);
}

const addItemNew = (item)=>{
   const id = items.length ? items[items.length - 1].id + 1 : 1;
   const myNewItem = {id, checked: false, item};
   const list = [...items, myNewItem];
   setItems(list);
}

const handleaddItem = (e)=>{
  e.preventDefault();
  if(!addItem) return;

  setAddItem('');

  //add item logic 

  
  
}

  return (
    <>
      <Header title="Grocery Market" />
      <AddItem addItem={addItem} handleaddItem={handleaddItem} setAddItem={setAddItem}/>
      <Content 
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </>
  )
}

export default App
