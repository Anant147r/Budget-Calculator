import React,{useState,createContext,useReducer} from "react"
import {listReducer} from "./listReducer"

export const useItems=createContext();

const randID=()=>{
    return(Math.random()*1000000000);
}
const ItemList=(props)=>{
    const [items,setItems]=useState([])

    const [state,dispatcher]=useReducer(listReducer,items)  
    
    //Adding items
    const addItems=(item)=>{
        dispatcher({type:"ADDITEM",item})
    }

    //Deleting items
    const deleteItems=(id)=>{
        dispatcher({type:"DELETEITEM",key:id})
    }
    return(
        <useItems.Provider value={{state,addItems,deleteItems}}>
            {props.children}
        </useItems.Provider>
    )
}
export default ItemList;