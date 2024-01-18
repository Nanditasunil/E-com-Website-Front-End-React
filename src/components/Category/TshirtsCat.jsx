import "./Category.scss";
import Products from "../Products/TshirtCategory";
const TshirtCat = () => {
  return (
    <div className="category-main">
      <div className="layout">
        <div className="cat-title">Graphic Tshirt </div>
        <Products innerPage={true} />
      </div>
    </div>
  );
};

export default TshirtCat;
