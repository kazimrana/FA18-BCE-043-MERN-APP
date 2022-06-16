import Footer from "../Footer/footer";
import Navbars from "../Header/navbar";
import "./cart.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";
import { addProduct } from "../Service/api";

function Cart() {
  const navigate = useNavigate();
  let location = useLocation();
  let data = location.state;
  const total = data.price;
  const [quantity, setQuantity] = useState({
    count: 1,
    total_price: total,
  });

  const updateQuantity = () => {
    if (quantity.count < data.stock) {
      setQuantity((previousState) => {
        return {
          ...previousState,
          count: (quantity.count += 1),
          total_price: quantity.count * total,
        };
      });
    }
  };
  const DecQuantity = () => {
    if (quantity.count > 1) {
      setQuantity((previousState) => {
        return {
          ...previousState,
          count: (quantity.count -= 1),
          total_price: quantity.count * total,
        };
      });
    }
  };

  const handleDelete = () => {
    navigate({ state: null });
    navigate("/cart2");
  };

  const handleProceed = async (e) => {
    e.preventDefault();
    navigate("/proceed");
    await addProduct(product_details);

    
  };

  const product_details = { name: data.name, quantity: quantity.count,price: quantity.total_price };
  //const total_price = total * quantity.count;
  return (
    <div>
      <Navbars />
      <div className="container-fluid">
        <div id="cart-row-1" className="row">
          <div className="col-2">
            <img src={data.img} alt="" width={90} />
          </div>
          <div id="cart-col2" className="col-6">
            <p id="cart-p1">{data.discription}</p>
          </div>
          <div id="cart-col2" className="col-3">
            <p id="cart-p2">$ {data.price}</p>
            <button id="cart-b1" onClick={updateQuantity}>
              +
            </button>
            <span id="cart-s1">{quantity.count}</span>
            <button id="cart-b3" onClick={DecQuantity}>
              -
            </button>
            <br />
            <button id="cart-b2" onClick={handleDelete}>
              DELETE
            </button>
          </div>
        </div>
        <div id="cart-col-3" className="row">
          <div className="col-12">
            <p id="cart-p3">TOTAl PRICE : $ {quantity.total_price}</p>
          </div>
        </div>
        <div id="cart-col-4" className="row">
          <div className="col-12">
            <button id="cart-p4" onClick={(e) => handleProceed(e)}>
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
