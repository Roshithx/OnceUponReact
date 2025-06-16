import ItemList from "./ItemList"
const Content = ({items,handleCheck,handleDelete}) => {



  return (
    <div>
        {items.length ? (
         <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
        )
    :
    <p style={{textAlign:'center'}}>No Items Found</p>
    }
 
    </div>
  )
}

export default Content