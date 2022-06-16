import "../Footer/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div id="f-1" className="container-fluid">
        <div className="row">
          <div id="f-1-col-1" className="col-4">
            <ul>
              <Link id="L-2" to="/Shipping">
                <li>
                  <i id="f-1-icon" class="bi bi-truck"></i>Shipping & Delivery
                </li>
              </Link>
              <Link id="L-2" to="/Refund">
                <li>
                  <i id="f-1-icon" class="bi bi-arrow-repeat"></i>Returns &
                  Refunds
                </li>
              </Link>
              <Link id="L-2" to="/Orders">
                {" "}
                <li>
                  <i id="f-1-icon" class="bi bi-box2-fill"></i>Orders
                </li>
              </Link>
            </ul>
          </div>
          <div id="f-1-col-1" className="col-4">
            <ul>
              <Link id="L-2" to="/Privacy">
                <li>
                  <i id="f-1-icon" class="bi bi-shield-shaded"></i>Privacy
                  Policy
                </li>
              </Link>
              <Link id="L-2" to="/Terms">
                <li>
                  <i id="f-1-icon" class="bi bi-archive-fill"></i>Terms &
                  Services
                </li>
              </Link>
            </ul>
          </div>
          <div id="f-1-col-2" className="col-4">
            <p id="col-2-p1">Keep In Touch</p>
            <i id="col-2-i" class="bi bi-facebook"></i>
            <i id="col-2-i2" class="bi bi-instagram"></i>
            <i id="col-2-i2" class="bi bi-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
