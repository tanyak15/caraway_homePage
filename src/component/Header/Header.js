import React from "react";
import "./Header.css";

const Header = () => {
  const renderStars = () => {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(
        <img
          key={i}
          src="https://cdn-icons-png.flaticon.com/128/929/929495.png"
          style={{ width: "25px", height: "25px" }}
        />
      );
    }
    return arr;
  };
  return (
    <div className="header">
      <h2>All In Good Taste</h2>
      <div className="info">
        <div className="image">{renderStars()}</div>
        <div className="review">4.8/5.0 (47,560 reviews)</div>
      </div>
    </div>
  );
};

export default Header;
