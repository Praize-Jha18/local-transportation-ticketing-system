import React from 'react';
import Booking from './booking.page';
import image1 from '/src/assets/Buses2.png'

const Home = () => {
  return(
    <div className="d-flex flex-column min-vh-100">
<div 
      style={{
        backgroundImage: `url(${image1})`,
        backgroundColor: 'none',
        backgroundSize: 'cover',
        color: 'white',
        flex: '1 0 auto'
      }}
    >
      <h1 className="text-center">WELCOME userName</h1>
      <div className="container text-center mt-5">
      <div className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col-12 col-md-6 mb-4">
            <p>
            Welcome aboard Rapid Transit, where your journey matters as much as your destination! Our fleet of state-of-the-art buses ensures that you travel in comfort and style. With routes covering the bustling city of Lagos and beyond, we're dedicated to providing punctual, safe, and affordable transportation services. Whether you're commuting to work, exploring the city, or traveling long distances, **ComfyRide** is your reliable partner on the road. Book your next trip with us and experience the joy of traveling the Rapid way! 🚌✨
            </p>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <Booking />
          </div>
        </div>
      </div>
      </div>
      </div>
       
  );
};

export default Home;
