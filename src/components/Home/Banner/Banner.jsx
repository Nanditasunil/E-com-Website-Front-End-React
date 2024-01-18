import "./Banner.scss";

import BannerImg from "../../../assets/vector.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1 className="h1-head">TRENDS</h1>
          <p>
            Welcome to a world of limitless style possibilities! Discover the
            perfect blend of fashion and individuality with our customizable
            collection. From sleek jackets to classic varsitys, comfy hoodies to
            trendy t-shirts, and beyond, we empower you to express your unique
            identity through clothing that's tailored just for you. Elevate your
            wardrobe, stand out from the crowd, and embrace the art of
            self-expression – because your style deserves to shine.
          </p>
          <div className="ctas">
            <button
              type="button"
              class="btn btn-outline-secondary border border-dark text-dark fs-3"
              disabled
            >
              Read More
            </button>
            {/* <div className="banner-cta">Read More </div> */}
            <button type="button" class="btn btn-light fs-3" disabled>
              Shop Now
            </button>
            {/* <div className="banner-cta v2 ">Shop Now </div> */}
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="image of banner " />
      </div>
    </div>
  );
};

export default Banner;
