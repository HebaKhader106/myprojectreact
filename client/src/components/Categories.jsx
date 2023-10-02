import {Fragment, useEffect,useState} from "react";
import useFetch from '../hooks/useFetch.js';
import Checkbox from './Checkbox.jsx'

export default function Categories() {
   const[categories,setcategories]=useState([]);
 
    const {data,loading,error }= useFetch("/categories?populate=*");
     useEffect(()=>{
       data && setcategories(data);
        // console.log(categories);
      },[data])
   
    
  return (
    <div className="categories">
    {loading ? "loading..." : categories.map(category => (
      <Fragment key={category.id}>
       <Checkbox category={category}/>
       </Fragment>
       
    ))}
    </div>
  )
}
