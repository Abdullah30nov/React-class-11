import Home from "./SecComponent/Home/Home"
import { Route,  Routes } from "react-router-dom"
import Products from "./SecComponent/ProDuct/Product"
function App(){
  return (
    <>
    {/* <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product/>} />
    </Routes> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product/:id" element={<Products/>}/>
    </Routes>
    </>
  );
}
export default App