import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import NotFound from "./invalid";
import Contact from "./Contact/contact";
import Refund from "./Refund/refund";
import Shipping from "./Shipping/shipping";
import Show from "./Form/show";
import Privacy from "./Privacy/privacy";
import Shop from "./Shop/shop";
import FAQ from "./faq";
import ProductPage from "./Product Page/productPage";
import React, { Component } from "react";
import Cart from "./Cart/cart";
import Cart2 from "./Cart/cart2";
import Proceed from "./Cart/proceed";
import Login from "./Login";
import Signup from "./Signup";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Routes>
          <Route index element={<Layout />} />
          <Route path="*" element={<NotFound />} />
          <Route path="CONTACT" element={<Contact />} />
          <Route path="Refund" element={<Refund />} />
          <Route path="Shipping" element={<Shipping />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="show" element={<Show />} />
          <Route path="Privacy" element={<Privacy />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="FAQs" element={<FAQ />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="cart" element={<Cart/>} />
          <Route path="cart2" element={<Cart2/>} />
          <Route path="proceed" element={<Proceed/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
