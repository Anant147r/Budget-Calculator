export const listReducer=(state,action)=>{
    switch(action.type){
        case "ADDITEM":
            state=[...state,{...action.item,id:Math.random()*100000000}]
            return state;
        
        case "DELETEITEM":
            state=state.filter(item=>item.id!==action.key);
            return state;
        default:
            return state;
}}