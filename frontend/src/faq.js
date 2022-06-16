import Footer from "./Footer/footer";
import Navbars from "./Header/navbar";
import Faqs from "./Homepage/FAQs/faqs";

function FAQ() {
  return (
    <div>
      <Navbars />
      <div style={{ marginTop: "0px", marginBottom: "20px" }}>
        <Faqs />
      </div>

      <Footer />
    </div>
  );
}

export default FAQ;
