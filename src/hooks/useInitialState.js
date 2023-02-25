import { useState } from "react";
import initialState from '../initialState'
 
const useInitialState = ()=>{
    const [state, setState] = useState(initialState);

    const addToCart = payload=>{
        const cartList = state.cart;
        const productIndex = state.cart.findIndex(product => product.id === payload.id)
        productIndex >= 0 ? [cartList[productIndex].qty+=1] : payload.qty = 1;
        setState({
            ...state,
            cart: productIndex >= 0? [...cartList] : [...state.cart, payload]
        });
    }

    const removeFromCart = payload =>{
        let cartList = state.cart;
        const productIndex = state.cart.findIndex(product => product.id === payload.id)
        if(cartList[productIndex].qty>1) {cartList[productIndex].qty-=1}
        else{ 
            cartList = cartList.filter(item => item.id !== payload.id)
        }
        setState({
            ...state,
            cart: cartList
        });
    }

    const deleteFromCart = payload =>{
        let cartFiltered = state.cart.filter(product => product.id !== payload.id);
        setState({
            ...state,
            cart: cartFiltered? cartFiltered : []
        })
    }

    const addToBuyer = payload =>{
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const addNewOrder = payload =>{
        setState({
            ...state,
            orders: [...state.orders, payload]
        })

    }

    const clearCart = () =>{
        setState({
            ...state,
            cart: []
        })
    }

    return {
        state,
        addToCart,
        removeFromCart,
        deleteFromCart,
        addToBuyer,
        addNewOrder,
        clearCart,
    }
}

export default useInitialState;