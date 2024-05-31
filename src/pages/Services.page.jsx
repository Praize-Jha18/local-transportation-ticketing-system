import '../Services.css'
import bgImage from '/src/assets/Busbg.jpg'

const Services = () => {
  return (
    <main>
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
        <section className='footer'>
            <div className='footer_container'>
                <div className='company_details'>
                    <h1>LTS</h1>
                    <p>Leading in Transportation Comfort, Safety is assured</p>
                </div>
                <div className='footer_links'>
                    <h6>Important Links</h6>
                    <ul className='links'>
                        <li><a href="#">Appointment</a></li>
                        <li><a href="#">Booking</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">About us</a></li>
                    </ul>
                </div>
                <div className='contact_us'>
                    <h6>Contact Us</h6>
                    <p>Call:(+254) 717 783 146</p>
                    <p>Email: medin@gmail.com</p>
                    <p>Adress: 0123 Some place</p>
                    <p>Some country</p>
                </div>
                <div className='news'>
                    <h6>Newsletter</h6>
                    <div className='input_container'>
                        <input type="text" placeholder='Enter your email adress' />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <p>@ 2021 MEDIAN ALL RIGHT RESERVED by knhs</p>
            </div>
        </section>


    </main>
  )
}

export default Services