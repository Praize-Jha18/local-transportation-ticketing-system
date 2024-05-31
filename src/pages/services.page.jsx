import React from 'react';
import image1 from '/src/assets/servicesbg.jpg'

import image2 from '/src/assets/RapidImg.jpg'
const Services = () => {
  const services = [
    { id: 1, title: "Bus" },
    { id: 2, title: "Bus1" },
    { id: 3, title: "Bus" },
    { id: 4, title: "Bus" },
    { id: 5, title: "Bus" },
    { id: 6, title: "Bus" },
  ];

  return (
<>
{/* <div className="container-fluid home-container">
      <div className="row align-items-center">
        <div className="col-md-6 text-section">
          <h1 className="header-text">RAPID TRANSIT</h1>
          <p className="description">
            Transportation, the lifeblood of our world, is the movement of people and goods that connects us all.
            From the first steps taken by early humans to the high-speed trains of today, our modes of travel have constantly evolved.
          </p>
          <div className="button-group">
            <button className="btn btn-primary buy-ticket-button" style={{color: 'white'}}>Buy Ticket</button>
            <button className="btn btn-primary read-button">Read...</button>
          </div>
        </div>
        <div className="col-md-6 image-section">
          <div className="image-wrapper">
            <img src={image2} alt="Transit" className="main-image" />
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-12 text-center">
          <button className="btn btn-primary services-button">Our Services</button>
        </div>
      </div>
    </div> */}


    <div className="header-content text-center text-white bg-image" style={{backgroundImage : `url(${image2})`
          }}> 
        <div className='text-content' style={ { zIndex: 2 }}>
        <h1>Rapid Transit</h1>
        <p className="description text-center" >
            Transportation, the lifeblood of our world, is the movement of people and goods that connects us all.
            From the first steps taken by early humans to the high-speed trains of today, our modes of travel have constantly evolved.
          </p>
        <div className="button-group">
            <button className="btn btn-primary buy-ticket-button" style={{color: 'white'}}>Buy Ticket</button>
            <button className="btn btn-primary read-button">Read...</button>
          </div>
          </div> </div>
        
  

    <section className="services-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 text-white">Our Services</h2>
        <div className="row">
          {services.map(service => (
            <div className="col-md-4 mb-4" key={service.id}>
              <div className="card" style={{backgroundColor: '#e76666'}}>
                <img src={image1} className="card-img-top" alt="Service" />
                <div className="card-body" style={{backgroundColor: '#2f36bc',  borderBottomRightRadius: '25px', borderBottomLeftRadius: '25px'}}>
                  <h5 className="card-title" style={{color: 'black'}}>{service.title}</h5>
                  <a href="#!" className="btn btn-primary">Click Here</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Services;