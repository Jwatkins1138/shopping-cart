import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "shopping-cart/" element={<Home />} />
        <Route path= "shopping-cart/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}


export default RouteSwitch;