import React from 'react'
import { Link } from 'react-router-dom'
import {MdDelete} from 'react-icons/md'

import '../styles/components/CheckOut.css'


function CheckOut() {
  return (
    <main className="Checkout">
      <section className='Checkout-content'>
        <h3>Lista de Pedidos</h3>
        <article className="Checkout-item">
          <details className='Checkout-element'>
            <h4>ITEM NAME</h4>
            <span>$10</span>
          </details>
          <button type='button'>
            <MdDelete size='20px'/>
          </button>
        </article>
      </section>
      <aside className='Checkout-sidebar'>
        <h3>Precio Total: $10</h3>
        <Link to="/checkout/information">
          <button type='button'>Continue</button>
        </Link>
      </aside>
    </main>
  )
}

export default CheckOut