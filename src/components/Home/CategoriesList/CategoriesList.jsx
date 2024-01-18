import React from "react";
import "./CategoriesList.scss"; // Import your CSS file

import iconImageh from "./icons/hoodie.png";
import iconImagev from "./icons/varsity-jacket.png";
import iconImaget from "./icons/tshirt.png";
import iconImages from "./icons/socks.png";

function CategoryiesList() {
  return (
    <section
      id="features"
      className="features-area item-full text-center cell-items default-padding"
    >
      <div className="orange-bgc">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site-heading text-center">
                <h2>
                  <span>Categories</span>
                </h2>
                <h4>Explore Endless Styles: Our Curated Categories Await!</h4>
              </div>
            </div>
          </div>
          <div className="row features-items">
            <div className="col-md-3 col-sm-6 equal-height">
              <div className="item">
                <div className="icon">
                  <img
                    src={iconImageh}
                    alt="Icon-hoodie"
                    style={{ width: "100px", height: "100px" }}
                  />
                  {/* <i className="fas fa-tv"></i> */}
                </div>
                <div className="info">
                  <h4>Hoodies</h4>
                  <p>
                    Wrap Yourself in Customizable Comfort – Stay Cozy in Style!
                    Our hoodies are your canvas for self-expression. Personalize
                    them with vibrant designs, playful graphics, or even your
                    team's logo. Craft your own unique look while staying warm
                    and comfy
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 equal-height">
              <div className="item">
                <div className="icon">
                  {/* <i className="fas fa-headset"></i> */}
                  <img
                    src={iconImagev}
                    alt="Icon-jacket"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <div className="info">
                  <h4>Varsity Jackets</h4>
                  <p>
                    Your Ticket to Team Spirit – Create a Fun, Vibrant Look!
                    Unleash your inner school spirit with our customizable
                    varsity jackets. From sporty insignias to bold color
                    combinations, these jackets let you make a statement. Show
                    off your individuality in a classic yet fun way
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 equal-height">
              <div className="item">
                <div className="icon">
                  {/* <i className="fas fa-chart-line"></i> */}
                  <img
                    src={iconImaget}
                    alt="Icon-tshirt"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <div className="info">
                  <h4>T-Shirts</h4>
                  <p>
                    Wear Your Creativity – Craft Fun and Vibrant Designs! Our
                    customizable t-shirts are a blank canvas for your
                    imagination. Whether it's quirky slogans, vibrant artwork,
                    or personalized messages, you can wear your creativity on
                    your sleeve – literally!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 equal-height">
              <div className="item">
                <div className="icon">
                  {/* <i className="fas fa-pen-fancy"></i> */}
                  <img
                    src={iconImages}
                    alt="Icon-socks"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <div className="info">
                  <h4>Funky Socks</h4>
                  <p>
                    Step Up Your Style Game – Embrace Fun and Vibrant Footwear!
                    Your feet deserve some fun too! Our funky socks collection
                    lets you add a splash of color and personality to your every
                    step. Mix and match playful patterns for a unique, vibrant
                    touch to your outfit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryiesList;
