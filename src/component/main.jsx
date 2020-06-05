import React from "react";

const Main = () => {
  return (
    <div>
      {/* <!-- Page Content --> */}
      <section className="py-5" id="features">
        <div className="container">
          <h2 className="line">FEATURES</h2>
          <div className="row feature-row my-5">
            <div className="col-sm-12 col-md-7">
              <h2>Lorem, ipsum dolor.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                repellendus earum dolorem distinctio reprehenderit voluptatum
                soluta fugiat saepe aliquid in? Maxime odio debitis asperiores
                deserunt? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Illo magni aliquam repudiandae ab maxime tempore nostrum!
                Dolorem excepturi eaque deserunt itaque quos ex ab sapiente
                numquam voluptas saepe. Omnis, ab?
              </p>
            </div>
            <div className="col-sm-12 col-md-5">
              <img
                src={process.env.PUBLIC_URL + "/images/chart.jpg"}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="why-ewarren" id="services">
        <div className="container ">
          <h2 className="line">WHY EWARREN</h2>

          {/* <p>There are so many reasons to choose us</p> */}
          <div className="row feature-row my-5">
            <div className="col-md-4  smallie">
              <img
                src={process.env.PUBLIC_URL + "/images/secure.png"}
                class="rounded-circle img-fluid"
                alt="secure"
                width="100"
                height="100"
              />
              <h3>Secure</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                magni molestiae enim labore eveniet nisi tempore aliquid
                corrupti et ullam.
              </p>
            </div>
            <div className="col-md-4  smallie">
              <img
                src={process.env.PUBLIC_URL + "/images/multi.png"}
                class="rounded-circle img-fluid"
                alt="Multi Purpose"
                width="100"
                height="100"
              />
              <h3>Multi Purpose</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                magni molestiae enim labore eveniet nisi tempore aliquid
                corrupti et ullam.
              </p>
            </div>
            <div className="col-md-4  smallie">
              <img
                src={process.env.PUBLIC_URL + "/images/flexible.png"}
                class="rounded-circle img-fluid"
                alt="flexible"
                width="100"
                height="100"
              />
              <h3>Flexible</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                magni molestiae enim labore eveniet nisi tempore aliquid
                corrupti et ullam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
