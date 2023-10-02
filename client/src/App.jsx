import { useEffect, useState } from 'react';
import Products from './components/Products';
import Card  from './components/Cart';
import './App.css';
import Categories from './components/Categories';
import StoreContext from './hooks/StoreContext.js'

function App() {

const [filter , setfilter]=useState("/products?populate=*")
const[selectedcategories,setselectedcategories]=useState([])
  
  
  return (
    <div>
    <Card/>
    <StoreContext.Provider value={{filter, setfilter,selectedcategories,setselectedcategories}}>
      <Categories/>
     <Products/>
     </StoreContext.Provider>
    
   
     </div>
    
  
  )

}
export default App;
