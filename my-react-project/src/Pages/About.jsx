import react from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
function About() {
  const navgate = useNavigate();
  return (
    <div>
      <h1>hello about</h1>
      <button onClick={() => navgate("/about/nested")}>nested dikhao</button>
      <Outlet />
    </div>
  );
}
export default About;
