import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import Navbars from "../Header/navbar";
import "./cart.css";
function Cart2() {
    return ( 
        <div>
            <Navbars/>
            <p id="cart2-p1">THE CART IS EMPTY NOW</p>
            <Link to="/Shop"><button id="cart2-b1">WANT TO BUY SOMETHING !</button></Link>
            <Footer/>
        </div>
     );
}

export default Cart2;