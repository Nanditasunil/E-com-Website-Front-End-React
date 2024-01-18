import "./Tshirt.scss";
import prod from "../../../assets/products/tshirts/grey.png";

const Tshirt4 = () => {
  return (
    <div className="prod-card">
      <div className="thumbnail">
        <img src={prod} alt="product" />
      </div>
      <div className="details">
        <span className="name">Grey tshirt </span>
        <span className="price">&#x20B9; 699</span>
      </div>
    </div>
  );
};

export default Tshirt4;
