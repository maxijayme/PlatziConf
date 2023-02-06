import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Information.css'

function Information() {
  return (
    <main className="Information">
      <section className="Information-content">
        <article className="Information-head">
          <h2>Contact Information</h2>
        </article>
        <article className="Information-form">
          <form action="">
            <input type="text" placeholder='Complete name' name='name' />
            <input type="text" placeholder='Email' name='email' />
            <input type="text" placeholder='Address' name='address' />
            <input type="text" placeholder='Apto.' name='apto' />
            <input type="text" placeholder='City' name='City' />
            <input type="text" placeholder='Country' name='country' />
            <input type="text" placeholder='State' name='state' />
            <input type="text" placeholder='Postal Code' name='cp' />
            <input type="text" placeholder='Phone' name='phone' />
          </form>

        </article>
        <article className="Information-buttons">
        <div className="Information-back">
          Go back
        </div>
        <div className="Information-next">
          <Link to="/checkout/payment">
            Next
          </Link>
        </div>
        </article>
      </section>
      <aside className='Information-sidebar'>
      <h1>Pedido</h1>
      <section className="Information-item">
        <article className="Information-element">
          <h4>Item Name</h4>
          <span>$10</span>
        </article>
      </section>
      </aside>
    </main>
  )
}

export default Information