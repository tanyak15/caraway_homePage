import React from "react";
import "./Items.css";
import chefImg from "../../images/chef.png";

const Items = ({
  box1_image_url,
  box2_content,
  box2_content_name,
  box3_image_url,
  value,
}) => {
  const renderStars = () => {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(
        <img
          key={i}
          src="https://cdn-icons-png.flaticon.com/128/929/929495.png"
        />
      );
    }
    return arr;
  };
  return (
    <div className="firstPage" style={{ transform: `translateX(${value}%)` }}>
      <div className="box1">
        <img src={box1_image_url}></img>
      </div>
      <div className="box2">
        <div className="box2-upper">
          <img src={chefImg}></img>
        </div>
        <div className="box2-middle">
          <p>{box2_content}</p>
        </div>
        <div className="box2-lower">
          <div className="box2-lower-left">{box2_content_name} |</div>
          <div className="box2-lower-right">{renderStars()}</div>
        </div>
      </div>
      <div className="box3">
        <img src={box3_image_url}></img>
      </div>
    </div>
  );
};

export default Items;
