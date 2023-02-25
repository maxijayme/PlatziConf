import React, {useContext}  from 'react'
import useGetAddressLocation from '../hooks/useGetAddressLocation';
import AppContext from '../context/AppContext';
import Map from '../components/Map'
import '../styles/components/Success.css'

function Success() {
  const {state} = useContext(AppContext)
    const {buyer} = state
    const positionLatLong = useGetAddressLocation(`${buyer[0].address}+${buyer[0].city}+${buyer[0].state}+${buyer[0].country}`)
  return (
    <main className="Succes">
      <section className="Success-content">
        <h2>{buyer[0].name} gracias por tu compra!</h2>
        <span>Tu pedido llegara dentro de 4 días</span>
        <article className='Success-map'> 
          {positionLatLong.lat && <Map positionLatLong={positionLatLong} buyer={buyer}/>}
        </article>
      </section>
    </main>
  )
}

export default Success