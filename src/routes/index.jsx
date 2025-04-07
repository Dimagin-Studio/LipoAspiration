import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { BackToTop } from "../components/UI/BackToTop";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <BackToTop />
    </Router>
  );
};

export default AppRouter;
