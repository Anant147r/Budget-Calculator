import React,{useContext} from "react"
import {useItems} from "./ItemList"
import Amount from "./Amount"
const PrintList =()=>{
   
    const {state,deleteItems}=useContext(useItems);
    return(
        <div>
        <ul>
            {state.map(item=>(<li key={item.id}>
                <button onClick={()=>deleteItems(item.id)}>
                    x
                </button>
                <span>Item is </span>{item.Item} and <span>And value is </span> {item.value}
                </li>))}
        </ul>
        <Amount/>
        </div>
    )
}
export default PrintList