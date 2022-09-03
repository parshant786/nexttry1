import { createSlice } from '@reduxjs/toolkit';
const initialState={
    cartArrary:[]
}
export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementProduct:(state,action)=>{
            const check =(e)=>e.id === action.payload.id
            const value = state.cartArrary.findIndex(check)
            if(value=== -1){
               state.cartArrary =[...state.cartArrary,action.payload]
            }
        },
        incrementAmount:(state,action)=>{
            state.cartArrary[action.payload].amount++;
        },
        decrementAmount:(state,action)=>{
            if(state.cartArrary[action.payload].amount ===1){
                state.cartArrary.splice(action.payload,1);
                return;
            }
            state.cartArrary[action.payload].amount--;
        }
    }
});
export const { incrementProduct,incrementAmount,decrementAmount} = cartSlice.actions

export default cartSlice.reducer