import "./contactBar.css";
import { Link } from "react-router-dom";

function ContactBar() {
  return (
    <div>
      <div className="container-fluid">
        <div id="cb-row" className="row">
          <div className="col-8">
            <p id="cb-p1">HAVING ANY QUERY REGARDING PRODUCT !</p>
          </div>
          <div className="col-4">
            <Link to="/CONTACT">
              <button id="cb-b1"> CONTACT NOW </button>
              <button id="cb-b1"> CONTACT NOW </button>
              <button id="cb-b1"> CONTACT NOW </button>
              <button id="cb-b1"> CONTACT NOW </button>
              <button id="cb-b1"> CONTACT NOW </button>
              <button id="cb-b1"> CONTACT NOW </button>
              <button id="cb-b1"> CONTACT NOW </button>
              <button id="cb-b1"> CONTACT NOW </button>
              <button id="cb-b1"> CONTACT NOW </button>
              <button id="cb-b1"> CONTACT NOW </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBar;
