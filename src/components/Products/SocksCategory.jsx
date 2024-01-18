import "./Products.scss";
import Product from ".//Socks/Socks1";
import Product2 from ".//Socks/Socks2";
import Product3 from ".//Socks/Socks3";
import Product4 from ".//Socks/Socks4";

const SocksCategory = ({ innerPage, headingText }) => {
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

export default SocksCategory;
