import "./shipping.css";
import Navbars from "../Header/navbar";
import Footer from "../Footer/footer";
import HeadBar from "../Page Bar/headBar";
import ContactBar from "../Contact Bar/contactBar";
function Shipping() {
  return (
    <div>
      <Navbars />
      <HeadBar name={"Shipping & Delivery"}/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <p id="r-p1">
              Our Shipping & Delivery Policy Allows You To Get Your Product In A Same Day With Our Fast Express Service
            </p>
            <ol>
              <li id="li-1">
                The Customer Received A Wrong Product
                <ul>
                  <li id="li-2">
                    If a wrong product is delivered to the customer, we will get
                    it picked up for free.
                  </li>
                  <li id="li-2">
                    Once the wrong product is received by us, We will dispatch
                    the correct product or refund the amount within 7 working
                    days.{" "}
                  </li>
                  <li id="li-2">
                    The product should be unused and the packaging should not be
                    damaged.
                  </li>
                  <li id="li-2">
                    The product should be sealed in its original product
                    packaging.
                  </li>
                  <li id="li-2">
                    All supporting documentation such as receipt of purchase,
                    price tags, labels, and warranty card as well as all
                    accessories should be dispatched with the product.
                  </li>
                </ul>
              </li>
              <li id="li-3">
              The Customer receives damaged goods
                <ul>
                  <li id="li-2">
                  Customers may claim refund if they receive damaged goods however they must provide video proof of this.
                  </li>
                  <li id="li-2">
                  Customers are advised to make video while unwrapping and unboxing their product from delivery packaging. This video will be used as a proof that customer received damaged good.
                  </li>
                  <li id="li-2">
                  In case of Mobile Phones: Mobile Performance issues, refund, replacement, and repair services will be decided and given by the Aftersales department.
                  </li>
                  <li id="li-2">
                  If video proof is not provided or video is made after the product has been unboxed then customer will not be entitled to a refund.
                  </li>
                  <li id="li-2">
                  Refund / Return / Change of product purchased from Mistore.pk will be only catered by Mistore.pk team, not at any Mi Exclusive Store.
                  </li>
                </ul>
              </li>
            </ol>

            <p id="r-p2"><span id="r-s1">PLEASE NOTE:</span> In order to maintain hygiene, fabric products (towels, pillows, Mi Bunny etc) cannot be returned if the package is opened.</p>
          </div>
        </div>
      </div>
      <ContactBar/>
      <Footer />
    </div>
  );
}

export default Shipping;
