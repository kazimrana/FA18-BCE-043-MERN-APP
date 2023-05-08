import "../Homepage/Product/product.css";
import { useNavigate } from "react-router";

const ShopProduct = (props) => {
  const navigate = useNavigate();
  const handleID = (props) => {
    navigate("/product", { state: props });
  };
  const handleCart = (props) => {
    navigate("/cart", { state: props });
  };
  return (
    <div>
      <div id="product-main" className="container-fluid">
        <div className="row">
          <div className="col-3">
            <img id="product-img" src={props.img} alt="" />
          </div>
          <div id="pr-row-2" className="col-9">
            <div className="row">
              <div className="col-7 ">
                <p id="product-p1">{props.name}</p>
              </div>
              <div className="col-5">
                <p id="product-p2">$ {props.price}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p id="product-p3">{props.line}</p>
                <p id="product-p4">{props.discription}</p>
                <button
                  type="submit"
                  id="product-button"
                  onClick={() => handleID(props)}
                >
                  QUICK VIEW
                </button>{" "}
                <button
                  id="product-button-cart"
                  onClick={() => handleCart(props)}
                  style={{ marginLeft: "30px" }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopProduct;
