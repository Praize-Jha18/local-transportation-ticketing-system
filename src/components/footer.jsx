import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4">
      <div className='container'>
        <div className='row'>
          <div className='col md-4'>
            <h5>Rapid Transit</h5>
            <p>Leading in Transportation Comfort, Safety is assured.</p>
          </div>
          <div className='col  md-4'>
            <h5>Important Links</h5>
            <ul>
              <li><a href="#appointment" className="text-white">Home</a></li>
              <li><a href="#booking" className="text-white">Booking</a></li>
              <li><a href="#profile" className="text-white">Profile</a></li>
            </ul>
          </div>
          <div className='col  md-4'>
            <h5>Contact Us</h5>
            <p>Call: (0264) 789 138 146</p>
            <p>Email: niit@gmail.com</p>
            <p>Address: Medin 3230 Some place Some country</p>
            {/* <Form>
              <Form.Group>
                <Form.Control type="email" placeholder="Enter your email address" />
              </Form.Group>
              <Button variant="light" type="submit">Subscribe</Button>
            </Form> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;