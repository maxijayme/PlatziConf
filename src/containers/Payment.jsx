import React from 'react'
import '../styles/components/Payment.css'

function Payment() {
  return (
    <main className="Payment">
      <section className="Payment-content">
        <h3>Summary of the order</h3>
        <article className='Payment-button'>
          Boton de pago de paypal
        </article>
      </section>
      <aside className='Payment-sidebar'>

      </aside>
    </main>
  )
}

export default Payment