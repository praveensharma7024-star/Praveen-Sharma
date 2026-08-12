import react from "react";
import { NavLink } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
const Navbar = () => {
  return (
    <div>
      {" "}
      <div className="flex item-center justify-between p-2 bg-red-600">
        <h1>logo</h1>
        <div className="flex gap-6">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/about"}>About</NavLink>
        </div>
        <button>login</button>
      </div>
    </div>
  );
};
export default Navbar;
