import "./privacy.css";
import Navbars from "../Header/navbar";
import Footer from "../Footer/footer";
import HeadBar from "../Page Bar/headBar";
import ContactBar from "../Contact Bar/contactBar";
function Privacy() {
  return (
    <div>
      <Navbars />
      <HeadBar name={"Privacy Policy"} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <p id="r-p1">ACCESSIBILITY STATEMENT FOR BOOST CANADA</p>
            <ol>
              <li id="li-1">
                What Are We Doing?
                <ul>
                  <li id="li-2">
                    To help us make the BOOST CANADA website a positive place
                    for everyone, we’ve been using the Web Content Accessibility
                    Guidelines (WCAG) 2.1. These guidelines explain how to make
                    web content more accessible for people with disabilities,
                    and user friendly for everyone. The guidelines have three
                    levels of accessibility (A, AA and AAA). We’ve chosen Level
                    AAA Compliance For this website.
                  </li>
                </ul>
              </li>
              <li id="li-1">
                How Are We Doing?
                <ul>
                  <li id="li-2">
                    We’ve worked hard on the BOOST CANADA website and believe
                    we’ve achieved our goal of AAA accessibility. We monitor the
                    website regularly to maintain this, but if you do find any
                    problems, please get in touch.
                  </li>
                </ul>
              </li>
              <li id="li-3">
                Let Us Know What You Think
                <ul>
                  <li id="li-2">
                    Customers may claim refund if they receive damaged goods
                    however they must provide video proof of this.
                  </li>
                  <li id="li-2">
                    Customers are advised to make video while unwrapping and
                    unboxing their product from delivery packaging. This video
                    will be used as a proof that customer received damaged good.
                  </li>
                  <li id="li-2">
                    In case of Mobile Phones: Mobile Performance issues, refund,
                    replacement, and repair services will be decided and given
                    by the Aftersales department.
                  </li>
                  <li id="li-2">
                    If video proof is not provided or video is made after the
                    product has been unboxed then customer will not be entitled
                    to a refund.
                  </li>
                  <li id="li-2">
                    Refund / Return / Change of product purchased from
                    Mistore.pk will be only catered by Mistore.pk team, not at
                    any Mi Exclusive Store.
                  </li>
                </ul>
              </li>
            </ol>

            <p id="r-p2">
              <span id="r-s1">PLEASE NOTE:</span> In order to maintain hygiene,
              fabric products (towels, pillows, Mi Bunny etc) cannot be returned
              if the package is opened.
            </p>
          </div>
        </div>
      </div>
      <ContactBar />
      <Footer />
    </div>
  );
}

export default Privacy;
