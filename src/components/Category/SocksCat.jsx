import "./Category.scss";
import Products from "../Products/SocksCategory";
const SocksCat = () => {
  return (
    <div className="category-main">
      <div className="layout">
        <div className="cat-title">Playful Socks </div>
        <Products innerPage={true} />
      </div>
    </div>
  );
};

export default SocksCat;
