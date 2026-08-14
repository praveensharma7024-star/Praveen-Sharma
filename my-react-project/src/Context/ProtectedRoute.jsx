import react from "react";
import { Navigate } from "react-router";
function ProtectedRoute({ children }) {
  let admin = false;
  if (!admin) {
    console.log("i am runnning");
    return <Navigate to={"/"} />;
  }
  return children;
}
export default ProtectedRoute;
