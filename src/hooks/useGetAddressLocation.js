import {useState, useEffect} from 'react'
import axios from 'axios'

const useGetAddressLocation = (address) => {
 const [map, setMap] = useState({})
 const LOCATION = process.env.LOCATION_KEY
 const params = {
    key: LOCATION,
    location: address
  }
 
  useEffect(()=>{
    const address = async()=> { 
        const response = await axios.get('https://www.mapquestapi.com/geocoding/v1/address', {params})
        setMap(response.data.results[0].locations[0].displayLatLng )
        }
        address()
      },[]
      )
     console.log('map',map)
  return map
}

export default useGetAddressLocation