import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
// import ProductPage from "../Pages/ProductPage";
import SingleEditProduct from "../Pages/SingleEditProduct";
import AllProduct from "../Pages/AllProduct";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Productpages from "../Pages/Productpages";

const Mainroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/product" element={<Productpages />}></Route>
        <Route path="/allproduct" element={<AllProduct />}></Route>
        <Route path="/product/edit/:id" element={<SingleEditProduct />}></Route>
      </Routes>
    </>
  );
};

export default Mainroutes;
