import { MdClose } from "react-icons/md";
import "./Search.scss";

import prod from "../../../assets/products/tshirts/black.png";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-model">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search For Products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-content">
        <div className="search-results">
          <div className="search-results-item">
            <div className="img-container">
              <img src={prod} alt="cartitem" />
            </div>
            <div className="prod-details">
              <span className="name">Black Tshirt</span>
              <span className="desc">The perfect tshirt to wear anywhere</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
