import React from 'react';
import Booking from './booking.page';

const Home = () => {
  return(
<div style={{ backgroundImage: 'url(path/to/background.jpg)', backgroundSize: 'cover', height: '100vh', color: 'white' }}>
     
      
        <h1>WELCOME</h1>
        <h2>Username</h2>
        <div className="container text-center mt-5 d-flex flex-row">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam dolorum ullam optio officiis dolorem aspernatur repellendus minus repellat laboriosam id, iusto quo, numquam neque saepe necessitatibus culpa nobis, nesciunt voluptates!</p>
        </div>
        <Booking />
      
      </div>
 
       
  );
};

export default Home;
