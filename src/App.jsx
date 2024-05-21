import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/no-page.page";
import Home from "./pages/home.page";
import Login from "./pages/login.page";
import Navbar from "./components/navbar";

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
