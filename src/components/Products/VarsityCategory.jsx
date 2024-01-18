import "./Products.scss";
import Product from ".//Varsity/Varsity1";
import Product2 from ".//Varsity/Varsity2";
import Product3 from ".//Varsity/Varsity3";
import Product4 from ".//Varsity/Varsity4";

const VarsityCategory = ({ innerPage, headingText }) => {
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

export default VarsityCategory;
