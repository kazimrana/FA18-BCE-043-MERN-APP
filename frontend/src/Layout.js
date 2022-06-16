import Footer from "./Footer/footer";
import Navbars from "./Header/navbar";
import Faqs from "./Homepage/FAQs/faqs";
import ProductState from "./Homepage/Product/productstate";
import Section6 from "./Homepage/Section-6/section6";
import Slider from "./Homepage/Slider/slider";

const Layout = () => {
    return ( 
        <div>
            <Navbars/>
            <Slider/>
           <ProductState/>
            <Faqs/>
            <Section6/>
            <Footer/>
        </div>
     );
}

export default Layout;