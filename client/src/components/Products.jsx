import {useContext, useEffect,useState} from "react";
import useFetch from '../hooks/useFetch.js';
import './Products.css'
import StoreContext from "../hooks/StoreContext.js";
import { addtocart } from "../redux/Cartreducer.js";
import { useDispatch } from "react-redux";
export default function Products() {
     const[products,setproducts]=useState([]);
    const {filter}=useContext(StoreContext);
    const {data,loading,error }= useFetch(filter);
   
    const dispatch =useDispatch();
   
   
    useEffect(()=>{
       data && setproducts(data);
      },[data])
   
      // useEffect(()=>{
      //   console.log(filter)}
      //   ,[filter])

  return (
    <div className="products">
    {loading ? "loading..." : products.map(product => (
       <div className="product" key={product.id}>
       <h2 className="product-title">{product.attributes.title}</h2>
        <div className="product-price">{product.attributes.price}</div>
       <img className="product-image" src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}/>
       <div className="product-desc">{product.attributes.Desc}</div>
       <button className="product-btn" onClick={()=>dispatch(addtocart({
        id:product.id,
        title:product.attributes.title,
        desc:product.attributes.Desc,
        price:product.attributes.price,
        image:product.attributes.image.data.attributes.url,
       }))}>Add to Cart</button>
       </div>
    ))}
    </div>
  )
}
