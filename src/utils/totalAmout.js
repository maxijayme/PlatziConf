import {useContext} from 'react'
import AppContext from '../context/AppContext'


const handleSumTotal = ()=>{
    const {state} = useContext(AppContext)
    const {cart} = state
    return cart.reduce(function(a, b) {return a + (b.price*b.qty)}, 0 )
  }

  export default handleSumTotal 