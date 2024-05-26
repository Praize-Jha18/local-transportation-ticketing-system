// import {logo} from '../assets/user-regular-24.png'

const Profile = () => {
  return (

<div className="container mt-5" style={{ color: 'white' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>PROFILE</h1>
                <div className="wallet" style={{ backgroundColor: '#4B67E3', padding: '10px', borderRadius: '5px' }}>
                    Wallet: 0.00
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 text-center">
                    <div className="profile-img" style={{ backgroundColor: '#4B67E3', padding: '20px', borderRadius: '10px' }}>
                        <img src="../assets/user-regular-24.png" alt="Profile" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
                        <button className="btn btn-primary mt-3" style={{ backgroundColor: '#FFFFFF', color: '#4B67E3', border: 'none' }}>Edit</button>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="profile-form" style={{ backgroundColor: '#4B67E3', padding: '30px', borderRadius: '10px' }}>
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="fullName">Full Name:</label>
                                <input type="text" className="form-control" id="fullName" placeholder="Full Name" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">E-mail Address:</label>
                                <input type="email" className="form-control" id="email" placeholder="E-mail Address" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="phone1">Phone Number:</label>
                                <input type="tel" className="form-control" id="phone1" placeholder="Phone Number" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="phone2">Phone Number:</label>
                                <input type="tel" className="form-control" id="phone2" placeholder="Phone Number" />
                            </div>
                            <button type="submit" className="btn btn-primary mr-2" style={{ backgroundColor: '#FFFFFF', color: '#4B67E3', border: 'none' }}>Save Changes</button>
                            <button type="button" className="btn btn-secondary" style={{ backgroundColor: '#FFFFFF', color: '#4B67E3', border: 'none' }}>Discard</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


  );
  
};

export default Profile;
