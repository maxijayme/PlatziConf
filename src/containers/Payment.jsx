import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import AppContext from '../context/AppContext'
import totalAmount from '../utils/totalAmout'
import '../styles/components/Payment.css'

function Payment() {

  const {state, addNewOrder, clearCart}= useContext(AppContext);
  const {cart, buyer} = state;
  const navigate = useNavigate()
  const paypal_id = process.env.PAYPAL_ID

  const paypalOptions = {
    "client-id": paypal_id,
    intent: 'capture',
    currency: 'USD',
    'disable-funding':'sofort'
  }

  const buttonStyles = {
    layout: "horizontal",
    shape: "rect",
    color:'blue',
  }

  const handleSumTotal = totalAmount;

  const handlePaymentSuccess = (data)=>{
      const newOrder = {
        buyer,
        products: cart,
        payment: data
      }
      addNewOrder(newOrder)
      clearCart()
      navigate('/checkout/success')
  }

  return (
    <main className="Payment">
      <section className="Payment-content">
        <h3>Summary of the order</h3>
        {cart.map(item =>{
          return (
          <div className= "Payment-item" key={item.id}>
            <div className="Payment-element">
              <div style={{display:'flex', alignItems: 'center', gap: 10}}>
                <h4>{item.title}</h4>
                <p> qty. {item.qty}</p>
              </div>
              <span>$ {item.price}</span>
            </div>
          </div>)}
        )}
        <div className='Payment-line'></div>
        <div className="Payment-element" style={{marginTop:20, marginBottom:20}}>
          <h4>Total:</h4> 
          <span> $ {totalAmount()}</span>
        </div>
        <article className='Payment-button'>
          <PayPalScriptProvider options={paypalOptions}>
            <PayPalButtons 
              paypalOptions={paypalOptions}
              buttonStyles={buttonStyles}
              amount={handleSumTotal}
              onClick={() => console.log('Start Payment')}
              onApprove={data => handlePaymentSuccess(data)}
              onError={error => console.log(error)}
              onCancel={data => console.log(data)}  
            />
          </PayPalScriptProvider>
        </article>
      </section>
      <aside className='Payment-sidebar'>

      </aside>
    </main>
  )
}

export default Payment