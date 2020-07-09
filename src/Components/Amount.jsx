import React, { useContext } from "react"
import {useItems} from "./ItemList"

const Amount=()=>{
    const {state}=useContext(useItems);
    const amounts=()=>{
        var amount=0;
        state.forEach(item => {
            amount+=item.value
        });
        return amount;
    }
    return(
    <h1>Total amout = {amounts()}</h1>
    )
}

export default Amount;