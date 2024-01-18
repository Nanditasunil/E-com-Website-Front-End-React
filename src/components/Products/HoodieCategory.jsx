import "./Products.scss";
import Product from ".//Hoodie/Hoodie1";
import Product2 from ".//Hoodie/Hoodie2";
import Product3 from ".//Hoodie/Hoodie3";
import Product4 from ".//Hoodie/Hoodie4";

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
