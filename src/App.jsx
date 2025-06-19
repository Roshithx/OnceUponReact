
import AddItem from './AddItem';
import './App.css'
import Content from './Content'
import Footer from './Footer';
import Header from './Header'
import React from 'react';

function App() {
    const [items, setItems] = React.useState(JSON.parse(localStorage.getItem('shopping-items')) || []);

const [addItem, setAddItem] = React.useState('');
const [newItem , setNewItem] = React.useState('');


const handleCheck =(id)=>{
    const list = items.map((item) => item.id === id ? {...item, isPurchased: !item.isPurchased} : item);
    setItems(list);
    localStorage.setItem('shopping-items', JSON.stringify(list));
}



const handleDelete = (id)=>{
    const list = items.filter((item) => item.id !== id);
    setItems(list);
    localStorage.setItem('shopping-items', JSON.stringify(list));
}

const addItemNew = (item)=>{
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id,isPurchased: false,item};
  const list = [...items, myNewItem];
  setItems(list);
  localStorage.setItem('shopping-items', JSON.stringify(list));
}

const handleaddItem = (e)=>{
  e.preventDefault();
  if(!addItem) return;
  setAddItem('');

  addItemNew(addItem);

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
