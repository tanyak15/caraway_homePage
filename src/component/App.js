import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Items from "./Items/Items";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background:
          "url('https://cdn-icons-png.flaticon.com/128/271/271228.png')",
        right: "100px",
        filter: "invert(100%)",
        zIndex: "999",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background:
          "url('https://cdn-icons-png.flaticon.com/128/318/318476.png')",
        left: "100px",
        filter: "invert(100%)",
        zIndex: "999",
      }}
      onClick={onClick}
    />
  );
};
const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="app">
      <Header />
      <div Slider className="item">
        <Slider {...settings}>
          <Items
            value={1}
            box1_image_url="https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/109531fam_XXX_v1.tif&qlt=50&wid=392&cvt=jpeg"
            box2_content="“The best looking set of pots and pans I have ever seen. They are easy to clean, heat up quickly, and come with great storage options. I have recommended this to several people!”"
            box2_content_name="Kyra T."
            box3_image_url="https://global-uploads.webflow.com/5d1bc4060ee92ac5d8b82865/6053961e2259fe6c546fff03_img-8-p-500.jpeg"
          />
          <Items
            value={0}
            box1_image_url="https://i.insider.com/5ecd4204aee6a81388268618?width=1136&format=jpeg"
            box2_content="“We never thought we could love pans like we do these. The natural ceramic non-stick is so far beyond any non-stick I have encountered in the past and they look absolutely stunning.”"
            box2_content_name="Grant C."
            box3_image_url="https://global-uploads.webflow.com/5d1bc4060ee92ac5d8b82865/6053961e2259fe6c546fff03_img-8-p-500.jpeg"
          />
          <Items
            value={2}
            box1_image_url="https://global-uploads.webflow.com/5e93308b2af0f955a9a2e796/613081bd6cb8d671f06ceaa6_caraway-cookware-set.jpg"
            box2_content="“I would never think to display pots and pans on the counter however these are truly 'Pieces of Art' that earned their place.”"
            box2_content_name="Maggie I."
            box3_image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXrot6Fu-UYvIHRCYYv0JAGXjfIHCUIJpfxat9wS4t-sbw9nYT0vJPY9m_Z9PdkHYjZP8&usqp=CAU"
          />
        </Slider>
      </div>
    </div>
  );
};

export default App;
