import React, { useState,useContext } from "react"
import {useItems} from "./ItemList"

const AddItems =()=>{
    const[item,setItem]=useState({Item:"",value:0});
    const {addItems}=useContext(useItems);
    
    const submitHandler=(e)=>{
        e.preventDefault();
        addItems(item);
    }

    return(
        <form onSubmit={(e)=>submitHandler(e)}>
            
            <input type="text" value={item.item} 
            onChange={(e)=>{
                setItem({...item,Item:e.target.value})
            }} 
            placeholder="Enter the item"/>
            
            <input type="number" value={item.value}
            onChange={(e)=>{
                setItem({...item,value:+e.target.value})
            }}
            placeholder="Enter the value"/>
            
            
            <input type="submit" />
            </form>
    )
}

export default AddItems;