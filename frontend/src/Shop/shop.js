import Footer from "../Footer/footer";
import Navbars from "../Header/navbar";
import HeadBar from "../Page Bar/headBar";
import ShopState from "./shopState";

const Shop = (props) => {
  return (
    <div>
      <Navbars />
      <HeadBar name={"SHOP FROM BOOST CANADA"} />
      <ShopState/>
      <Footer />
    </div>
  );
};

export default Shop;
