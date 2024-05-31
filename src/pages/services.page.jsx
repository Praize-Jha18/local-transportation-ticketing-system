import React from 'react';
import image1 from '/src/assets/servicesbg.jpg'

import bgImage from '/src/assets/RapidImg.jpg'
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
                <section className='bg_image' style={{backgroundImage: `url(${bgImage})`}}>

<div className='overlay'></div>
<div className='triangle'>
    <div className='content'>
    <div className='left_side'>
        <h1>RAPID <br /> TRANSIT</h1>
        <p>Transportation, the lifehood of our world, is the movement of th people and goods that connects us all.expand_more From the first steps taken by early humans to the high to the high-speed trains of today, our modes of travel have constantly evolved.</p>
        <div className='btn_group'>
            <button>Buy Ticket</button>
            <button>Read...</button>
        </div>
    </div>
    <div className='right_side'>
        <img src={bgImage} alt="bus-image" />
        <img src={bgImage} alt="bus-image" />

    </div>
</div>

</div>

</section>

<section className='description'>

<div className="description_card">
    <div className='dotted_border'>
        <img src={bgImage} alt="" />
        <button>Description</button>
    </div>
</div>

<div className="description_card">
    <div className='dotted_border'>
        <img src={bgImage} alt="" />
        <button>Description</button>
    </div>
</div>

<div className="description_card">
    <div className='dotted_border'>
        <img src={bgImage} alt="" />
        <button>Description</button>
    </div>
</div>

<div className="description_card">
    <div className='dotted_border'>
        <img src={bgImage} alt="" />
        <button>Description</button>
    </div>
</div>
<div className="description_card">
    <div className='dotted_border'>
        <img src={bgImage} alt="" />
        <button>Description</button>
    </div>
</div>

<div className="description_card">
    <div className='dotted_border'>
        <img src={bgImage} alt="" />
        <button>Description</button>
    </div>
</div>

</section> 
    </>

  );
}

export default Services;