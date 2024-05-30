import React from 'react';
import Booking from './booking.page';
import image1 from '/src/assets/Buses2.png'

const Home = () => {
  return(
<div style={{ backgroundImage: `url(${image1})`, backgroundColor:'none', backgroundSize: 'cover', color: 'white' }}>
        <h1>WELCOME UserName</h1>
      <div className="container flex-container text-center mt-5 ">
        <div className='flex-item '>
          
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam dolorum ullam optio officiis dolorem aspernatur repellendus minus repellat laboriosam id, iusto quo, numquam neque saepe necessitatibus culpa nobis, nesciunt voluptates!</p>
        </div>
        <Booking />
      
      </div>
    </div>
       
  );
};

export default Home;
