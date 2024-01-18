import "./Category.scss";
import Products from "../Products/VarsityCategory";
const VarsityCat = () => {
  return (
    <div className="category-main">
      <div className="layout">
        <div className="cat-title">versatile Varsity Jackets </div>
        <Products innerPage={true} />
      </div>
    </div>
  );
};

export default VarsityCat;
