import {useSelector,useDispatch} from 'react-redux';
import { useState } from 'react';
import'./Cart.css';
import {  FaRedoAlt, FaShoppingCart, FaTrash} from 'react-icons/fa'
import { removefromcart , resetcart } from "../redux/Cartreducer.js";

export default function Card() {
 const [togglecart,settogglecart]=useState(false)
  const showCartlist = ()=>{
    togglecart? settogglecart(false ):settogglecart(true);}
  const products = useSelector(state=>state.cart.products);
  // console.log(products);
  const dispatch =useDispatch();
  
  return (
    <div className='cart'>
   <div className='cart-icon' onClick={products.length>0 ? showCartlist : undefined}>
   <FaShoppingCart/>
    </div>
  <div className='cart-badge'>{products.length}</div>
  { togglecart  || products.length >0 ? (
 <ul className='cart-list' >
 {products.map(product=>(
  <li className='cart-item' key={product.id}>
   <img src={`http://localhost:1337${product.image}`} className='cart-item-image'/>
   <span className='cart-item-title'>{product.title}  </span>
   <span className='cart-item-price'>{product.price}$</span>
   <span className='cart-item-remove'
   onClick={()=>dispatch(removefromcart({
    id:product.id,
   }))}
   ><FaTrash/></span>
  </li>
 ))}

  
 <span className='cart-reset' onClick={()=>dispatch(resetcart(
  ))}><FaRedoAlt/></span>
  </ul>
  ):("")}
  
    </div>
  )
}
