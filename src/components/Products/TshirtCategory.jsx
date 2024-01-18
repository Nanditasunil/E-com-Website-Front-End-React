import "./Products.scss";
import Product from ".//Tshirt/Tshirt1";
import Product2 from ".//Tshirt/Tshirt2";
import Product3 from ".//Tshirt/Tshirt3";
import Product4 from ".//Tshirt/Tshirt4";

const TshirtCategory = ({ innerPage, headingText }) => {
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

export default TshirtCategory;
