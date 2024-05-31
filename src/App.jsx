import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/no-page.page";
import Home from "./pages/home.page";
import Login from "./pages/login.page";
import Navbar from "./components/navbar";
import Profile from "./pages/profile.page";
import Bus from "./pages/bus.page";
// import Booking from "./pages/booking.page";
import SignUp from "./pages/sign-up.page";
import './App.css'
import Booking from "./pages/booking.page";
import Services from "./pages/Services.page";

function App() {
  return(
    <>
      {/* <Navbar /> */}
      {/* <Header /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/manage-bus" element={<Bus />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
