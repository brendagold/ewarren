<Carousel interval={3000}>
  <Carousel.Item>
    <img
      src={process.env.PUBLIC_URL + "/images/abijian.jpg"}
      alt="First slide"
      className="img-fluid"
    />
    <Carousel.Caption>
      <h1>Organizing the Liberty of your Finances</h1>
      <p>
        <button className="btn btn-danger">Learn More</button>{" "}
        <button className="btn btn-transparent">Projects</button>
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={process.env.PUBLIC_URL + "/images/smiling.jpg"}
      alt="Third slide"
      className="img-fluid"
    />

    <Carousel.Caption>
      <h1>Show Solution</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={process.env.PUBLIC_URL + "/images/graph.jpg"}
      alt="Third slide"
      className="img-fluid"
    />

    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>
</Carousel>;
