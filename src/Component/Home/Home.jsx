import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    // const navigate = useNavigate()
    // function nav(){
    //     navigate('/product')
    // }
    // let obj ={
    //     name: 'John',
    //     age: 25,
    //     city: 'New York'
    // } 
  return (<>
    <div>Home Page</div>
    <button onClick={()=>navigate("/product")}>Go to Product page</button>
  </>
  )
}

export default Home