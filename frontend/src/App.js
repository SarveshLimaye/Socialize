import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Event from "./pages/Event";
import Footer from "./component/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/event" element={<Event/>} />
      </Routes>
      
    <Footer />
    </Router>
    
  );
}
export default App;
