import React from "react";
import "./AboutUsComp.scss"; // Import your CSS file

function AboutUsComp() {
  return (
    <section className="section-how" id="how">
      <div className="container">
        <span className="subheading">About Us</span>
      </div>
      <div className="container grid grid--2-cols grid--center-v">
        {/* STEP 01 */}
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">Affordable AND Stylish</h3>
          <p className="step-description">
            Style on a budget" is our motto. We believe that everyone deserves
            to express themselves through fashion without straining their
            finances. At RCApparels, we curate a diverse collection of hoodies,
            jackets, t-shirts, and socks that cater to your style needs while
            keeping your budget intact. Join the fashion revolution that won't
            break the bank!
          </p>
        </div>

        {/* STEP 02 */}

        <div className="step-text-box">
          <p className="step-number">02</p>
          <h3 className="heading-tertiary">Fast Delivery, Faster Fashion</h3>
          <p className="step-description">
            Life moves fast, and so should fashion. Our commitment to speedy
            delivery ensures that you stay ahead of the trends. Don't wait for
            weeks to rock the latest styles. With RCApparels, you'll always be
            fashion-forward, thanks to our rapid delivery service
          </p>
        </div>
        {/* STEP 03 */}
        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="heading-tertiary">
            Customization: Where Fashion Meets Individuality
          </h3>
          <p className="step-description">
            Why wear what everyone else is wearing when you can design your own?
            Dive into our world of customization, where you become the fashion
            designer. Mix and match colors, add personalized messages, or upload
            your artwork – the choice is yours. Say goodbye to cookie-cutter
            clothing and hello to a wardrobe that's uniquely you!
          </p>
        </div>
        <div className="step-text-box">
          <div class="quote-wrapper">
            <blockquote class="text">
              <p>The Secret of Great Style is to Feel Good in What you Wear</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsComp;
