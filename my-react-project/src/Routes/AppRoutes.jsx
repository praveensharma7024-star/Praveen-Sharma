import react from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Detail from "../Pages/Detail";
import Nested from "../Pages/Nested";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="detail" element={<Detail />} />
        </Route>
        <Route path="/About" element={<About />}>
          <Route path="Nested" element={<Nested />} />
        </Route>
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
