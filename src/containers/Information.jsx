import React, {useContext, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/components/Information.css'

function Information() {

  const {state, addToBuyer} = useContext(AppContext);
  const {cart} = state;
  const navigate = useNavigate()

  const form = useRef(null)

  const handleSubmit = () =>{
    const formData = new FormData(form.current);
    const buyer = Object.fromEntries(formData);
    addToBuyer(buyer)
    navigate('/checkout/payment')
  }

  const handlePrevPage = () =>{
    navigate('/checkout')
  }

  return (
    <main className="Information">
      <section className="Information-content">
        <article className="Information-head">
          <h2>Contact Information</h2>
        </article>
        <article className="Information-form">
          <form ref={form}>
            <input type="text" placeholder='Complete name' name='name' />
            <input type="text" placeholder='Email' name='email' />
            <input type="text" placeholder='Address' name='address' />
            <input type="text" placeholder='Apto.' name='apto' />
            <input type="text" placeholder='City' name='city' />
            <input type="text" placeholder='Country' name='country' />
            <input type="text" placeholder='State' name='state' />
            <input type="text" placeholder='Postal Code' name='cp' />
            <input type="text" placeholder='Phone' name='phone' />
          </form>

        </article>
        <article className="Information-buttons">
        <div className="Information-back">
          <button type='button' onClick={handlePrevPage}>Go back</button>
        </div>
        <div className="Information-next">
           <button type='button' onClick={handleSubmit}>Pagar</button>  
        </div>
        </article>
      </section>
      <aside className='Information-sidebar'>
      <h1>Pedido</h1>
      <section className="Information-list">
        {cart.map( item => (
            <div className='Information-product'>
              <h4>{item.title}</h4>
              <p> qty. {item.qty}</p>
              <span>${item.price * item.qty}</span>
            </div>
            ))}
       
      </section>
      </aside>
    </main>
  )
}

export default Information