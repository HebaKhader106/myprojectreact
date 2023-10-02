import qs from 'qs';
import StoreContext from '../hooks/StoreContext';
import { useContext, useEffect, useState } from 'react';
import './Checkbox.css'
const Checkbox = ({category}) => {
  const {setfilter ,selectedcategories,setselectedcategories} =useContext(StoreContext);
 
useEffect(()=>{
  const query = qs.stringify({
     filters:{
      categories:{
        id:{
          $in:selectedcategories
        }
      }
     } 
    })
    setfilter( "http://localhost:1337/api/products?populate=*&" + query)
  
},[selectedcategories])

  const handlefiltercategory =(e)=>{
    const selectid = e.target.dataset.category;
    const ischecked = e.target.checked;
    setselectedcategories(selectedcategories=>{
    if(ischecked) return  [...selectedcategories , selectid]
    return selectedcategories.filter(id=>id!==selectid)
  })
}
   return ( 
        <label className="toggler-wrapper style-1">
          <input type="checkbox" data-category={category.id} onChange={handlefiltercategory}/>
          <div className="toggler-slider">
            <div className="toggler-knob"></div>
          </div>
          <div className="badge">{category.attributes.title}</div>
        </label>
      
        

  
    //     <div >
    //     <h2>{category.attributes.title}</h2>
    //     <div>{category.attributes.Description}</div>
        
    //   <img src={`http://localhost:1337${category.attributes.image.data.attributes.url}`}/>
    //     </div>
          );
}
 
export default Checkbox;