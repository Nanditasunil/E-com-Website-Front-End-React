import "./Home.scss";

import Banner from "./Banner/Banner";

import Products from "../Products/Products";
import CategoriesList from "../Home/CategoriesList/CategoriesList";
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          {/* <Products headingText="Popular Products" /> */}
          {/* <CategoriesList /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
