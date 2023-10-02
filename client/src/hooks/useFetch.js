import { useEffect, useState } from "react";
import {fetchapi} from './fetchapi.js';


const useFetch = (endpoint)=>{
  const[data,setdata]=useState(null);
  const[loading,setloading]=useState(false);
  const[error,seterorr]=useState(false);
    useEffect(()=>{
      const fetchdata = async()=>{
    try{   
        setloading(true);
        const res = await fetchapi.get(endpoint);
         setdata(res.data.data);
      
             }
          catch(error){
                seterorr(error);
                console.log(error);
              };
              setloading(false);
        }
        fetchdata();
  },[endpoint]);
 return{data,loading,error};
}


export default useFetch;
