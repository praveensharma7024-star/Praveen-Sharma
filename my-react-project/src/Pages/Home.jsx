import react from "react";
import { Outlet } from "react-router";
function Home() {
  return (
    <div>
      <h1>hello</h1>
      <Outlet />
    </div>
  );
}
export default Home;
