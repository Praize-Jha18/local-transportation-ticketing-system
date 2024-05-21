import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar"
import NoPage from "./pages/no-page.page";
// import Layout from "./pages/layout.page";
import Home from "./pages/home.page";
import Login from "./pages/login.page";

function App() {
  return(
    <>
      {/* <Navbar /> */}
      {/* <Header /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
