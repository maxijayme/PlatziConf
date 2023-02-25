import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {MdDelete} from 'react-icons/md'
import AppContext from '../context/AppContext'
import totalAmount from '../utils/totalAmout'
import '../styles/components/Checkout.css'


function CheckOut() {

  const {state, removeFromCart, addToCart, deleteFromCart} = useContext(AppContext)
  const {cart} = state

  const handleRemoveFromCart = product => () => {
    removeFromCart(product)
  }
  
  const handleDeleteFromCart = product => () => {
    deleteFromCart(product)
  }

  const handleSumTotal = totalAmount;

  return (
    <main className="Checkout">
      <section className='Checkout-content'>
        {cart.length > 0 ? <h3>Lista de Pedidos</h3> : <h3>No hay productos en la cesta</h3>}
        {cart.map(item => (
          <article className="Checkout-item" key={item.id}>
            <div className='Checkout-element'>
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
            <button type='button' onClick={handleDeleteFromCart(item)}>
              <MdDelete size='20px' />
            </button>
            <button onClick={()=>addToCart(item)}>+</button>
              <p>{item.qty}</p>
            <button onClick={handleRemoveFromCart(item)}>-</button>
          </article>
        ))}
      </section>
      {cart.length > 0 && (
        <aside className='Checkout-sidebar'>
          <h3>Precio Total: ${handleSumTotal()}</h3>
          <Link to="/checkout/information">
            <button type='button'>Continue</button>
          </Link>
        </aside>
      )}
    </main>
  )
}

export default CheckOut