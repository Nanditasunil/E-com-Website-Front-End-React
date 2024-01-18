import "./Varsity.scss";
import prod from "../../../assets/products/varsity/green.png";

const Varsity4 = () => {
  return (
    <div className="prod-card">
      <div className="thumbnail">
        <img src={prod} alt="product" />
      </div>
      <div className="details">
        <span className="name">Green varsity </span>
        <span className="price">&#x20B9; 1499</span>
      </div>
    </div>
  );
};

export default Varsity4;
