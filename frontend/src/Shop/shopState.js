import React, { Component } from "react";
import { ProductList } from "../Homepage/Product/productList";
import ShopProduct from "./shopProduct";

class ShopState extends Component {
  state = {
    info: ProductList(),
  };
  
  render() {
    return (
      <div>
        {this.state.info.map((data) => (
          <ShopProduct
            img={data.img}
            count={data.count}
            name={data.name}
            line={data.line}
            price={data.price}
            discription={data.discription}
            id={data.id}
            stock={data.stock}
          />
        ))}
      </div>
    );
  }
}

export default ShopState;
