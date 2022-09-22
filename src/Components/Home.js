import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <Carousel>
          <Carousel.Item className="bg-success bg-gradient bg-opacity-25">
            <img
              className="d-block mx-auto py-4"
              src="https://media-be.chewy.com/wp-content/uploads/2021/05/27140116/Pug_FeaturedImage.jpg"
              height="600px"
              width="80%"
              alt="First slide"
            />
            <Carousel.Caption className="text-dark text-center fw-bolder">
              <h3 className="pb-5">Welcome to TINDOG</h3>
              <p className="pb-5">Dogs are the perfect Best Friends 🦮</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="bg-success bg-gradient bg-opacity-25">
            <img
              className="d-block mx-auto py-4"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
              height="600px"
              width="80%"
              alt="Second slide"
            />

            <Carousel.Caption className="text-danger text-center fw-bolder">
              <h3 className="pb-5">Come fall in love with me</h3>
              <p className="pb-5">Life is better with Dogs 🐕‍🦺</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="bg-success bg-gradient bg-opacity-25">
            <img
              className="d-block mx-auto py-4"
              src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg"
              height="600px"
              width="80%"
              alt="Third slide"
            />

            <Carousel.Caption className="text-warning text-center fw-bolder">
              <h3 className="pb-5">Your Paw-some Friend</h3>
              <p className="pb-5">Home is where the Dog is... 💕</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </React.Fragment>
  );
};
export default Home;
