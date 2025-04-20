import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import All from "./pages/home/All";
import Rsvp from "./pages/rsvp/Rsvp";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/rsvp" element={<Rsvp />} />
      </Routes>
    </Router>
  );
};

export default App;
