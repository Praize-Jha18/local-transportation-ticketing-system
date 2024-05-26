import React from "react";
const Booking = () => {

  return (
  <div className="flex-item mt-5 " >
      <div className="card" style={{ borderRadius: '20px', backgroundColor: '#1D1F6A' }}>
        <div className="card-body">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#bookSeat">Book a seat</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#hireBus">Hire a bus</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#bookingStatus">Booking status</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="bookSeat" className="tab-pane fade show active mt-3">
              <form>
                <div className="form-group">
                  <label htmlFor="departureTerminal">Departure Terminal</label>
                  <select className="form-control" id="departureTerminal">
                    <option>Terminal 1</option>
                    <option>Terminal 2</option>
                  </select>
                </div>
                <br/> 
                <div className="form-group">
                  <label htmlFor="arrivalTerminal">Arrival Terminal</label>
                  <select className="form-control" id="arrivalTerminal">
                    <option>Terminal 1</option>
                    <option>Terminal 2</option>
                  </select>
                </div>
                <br/>
            
                <div className="form-group">
                  <label htmlFor="seats">Seats</label>
                  <select className="form-control" id="seats">
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <br/> 
                <button type="submit" className="btn btn-light" style={{ width: '100%' }}>Proceed</button>
                <br/> <br/>
              </form>
            </div>

            <div id="hireBus" className="tab-pane fade mt-3">
              <form>
                <div className="form-group">
                  <label htmlFor="departure">Departure</label>
                  <select className="form-control" id="departure">
                    <option>Point 1</option>
                    <option>Point 2</option>
                  </select>
                </div>  <br/>
                <div className="form-group">
                  <label htmlFor="arrival">Arrival</label>
                  <select className="form-control" id="arrival">
                    <option>Point 1</option>
                    <option>Point 2</option>
                  </select>
                </div>  <br/>
                <div className="form-group">
                  <label htmlFor="date">Departure Date</label>
                  <input type="date" className="form-control" id="date" />
                </div>  <br/>
                <button type="submit" className="btn btn-light" style={{ width: '100%' }}>Proceed</button>
                <br/>
              </form>
            </div>

            <div id="bookingStatus" className="tab-pane fade mt-3">
              <p>Booking status content goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
