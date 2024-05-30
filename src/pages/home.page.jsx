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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam dolorum ullam optio officiis dolorem aspernatur repellendus minus repellat laboriosam id, iusto quo, numquam neque saepe necessitatibus culpa nobis, nesciunt voluptates!
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
