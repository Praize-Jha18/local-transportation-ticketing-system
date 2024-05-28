import React from 'react';
import Booking from './booking.page';
import image from '/src/assets/Busbg.jpg'

const Home = () => {
  return(
<div style={{ backgroundImage:{image}, backgroundColor:'none', backgroundSize: 'cover', height: '100vh', color: 'white' }}>
        <h1>WELCOME UserName</h1>
      <div className="container flex-container text-center mt-5 ">
        <div className='flex-item'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam dolorum ullam optio officiis dolorem aspernatur repellendus minus repellat laboriosam id, iusto quo, numquam neque saepe necessitatibus culpa nobis, nesciunt voluptates!</p>
        </div>
        <Booking />
      
      </div>
    </div>
       
  );
};

export default Home;
