import Footer from "../Footer/footer";
import Navbars from "../Header/navbar";
import "./productPage.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";

function ProductPage() {
  let location = useLocation();
  let data = location.state;

  const navigate = useNavigate();

  const handleCart = (props) => {
    navigate("/cart", { state: data });
  };


  return (
    <div>
      <Navbars />
      <div className="container-fluid">
        <div id="prhead" className="row">
          <div id="pr-col1" className="col-md-4">
            <img src={data.img} alt="" width={250} />
          </div>
          <div id="pr-col2" className="col-md-6">
            <p id="pr-p1">{data.name}</p>
            <p id="pr-p2">$ {data.price}</p>
            <div id="pr-div1">
              <p id="pr-p3">
                Ingredients: ASO® (bioavailable oxygen, distilled water, sea
                salt), magnesium chloride, and plant-sourced liquid minerals,
                including magnesium, zinc, and chromium.
              </p>
              <p id="pr-p4">
                <span id="pr-span1">Suggested Use: </span>
                Shake well before using. As a dietary supplement, take one
                capful (1 fl oz) before workouts, preferably on an empty
                stomach. Can be taken directly or added to distilled water.
                Avoid solution coming into contact with metal containers or
                utensils.
              </p>
            </div>
            <p id="pr-p5">Hurry ! only {data.stock} left in Stock</p>
            <div id="pr-bar" className="progress">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "50%", color: "#EA2425" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <button id="pr-button" onClick={() => handleCart(data)}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
