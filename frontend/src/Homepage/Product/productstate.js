import React, { Component } from "react";
import { ProductList } from "./productList";
import ProductCard from "./productCard";

class ProductState extends Component {
  state = {
    info: ProductList(),
  };

  render() {
    return (
      <div>
        {this.state.info.map((data) => (
          <ProductCard
            img={data.img}
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

export default ProductState;
