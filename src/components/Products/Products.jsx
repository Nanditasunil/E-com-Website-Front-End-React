import "./Products.scss";
import Product from "./Product/Product";
import Product2 from ".//Product/Product2";
import Product3 from ".//Product/Product3";
import Product4 from ".//Product/Product4";

const Products = ({ innerPage, headingText }) => {
  return (
    <div className="products-cont">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="prod">
        <Product />
        <Product2 />
        <Product3 />
        <Product4 />
      </div>
    </div>
  );
};

export default Products;
