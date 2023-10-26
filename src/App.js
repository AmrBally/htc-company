import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import BeforeFooter from "./components/BeforeFooter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <NavBar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contactus"
          element={
            <>
              <NavBar />
              <ContactUs />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
