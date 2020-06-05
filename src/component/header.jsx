import React from "react";
import { Carousel } from "react-responsive-carousel";

const Header = () => {
  return (
    <div className="container-fluid p-0">
      <Carousel>
        <div>
          <img src={process.env.PUBLIC_URL + "/images/abijian.jpg"} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/images/smiling.jpg"} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/images/graph.jpg"} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
