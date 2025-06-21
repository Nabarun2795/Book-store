import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'


const initialState = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cartslice',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find((item) => (item._id === action.payload._id));
            if (!existingItem) {
                state.cartItems.push(action.payload);
                Swal.fire({
                    title: "Item added to cart",
                    icon: "success",
                    draggable: true
                });
            } else {
                Swal.fire({
                    title: "Item Already added to cart",
                    
                    icon: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    
                })
            }

        },
        removeFromCart: (state,action)=>{
            state.cartItems=state.cartItems.filter(item=>item._id !== action.payload._id);
        },

        clearCart: (state,action)=> {
            state.cartItems=[];
        }
            
        
    },
})

export const { addToCart,removeFromCart ,clearCart } = cartSlice.actions

export default cartSlice.reducer 