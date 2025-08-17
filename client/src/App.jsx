import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Service from "./pages/Service";
import NavBar from "./components/NavBar";

const App = () => {
  return <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services" element={<Service />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/registration" element={<Registration />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App