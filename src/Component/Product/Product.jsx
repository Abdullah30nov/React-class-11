import React from 'react'
import {  useLocation, useSearchParams } from 'react-router-dom'

const Product = () => {
    // Normal Params
    // const {id}= useParams('');
    // console.log(id)

    // Qwery Params
    // const [getValue,setGetvalue]= useSearchParams('');
    // const data =(getValue.get("name"));
    // console.log(data)

    // get Data from Home.jsx using navigate
    // const Location = useLocation()
    // console.log(Location.state)
  return (
    <div>Product House
        {/* <h1>{Location.state.name}</h1>
        <h1>{Location.state.age}</h1>
        <h1>{Location.state.city}</h1> */}
    </div>
  )
}

export default Product