import "./Category.scss";
import Products from "../Products/HoodieCategory";
const HoodieCat = () => {
  return (
    <div className="category-main">
      <div className="layout">
        <div className="cat-title">Stylish Hoodie </div>
        <Products innerPage={true} />
      </div>
    </div>
  );
};

export default HoodieCat;
