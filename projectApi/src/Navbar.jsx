import react, { useContext } from "react";
import { MyStore } from "./context/MyContext";
const Navbar = () => {
  const { setToggle } = useContext(MyStore);
  return (
    <div className="bg-blue-700 p-1 flex items-center justify-between">
      <img
        className="rounded-full"
        width={35}
        src="https://sp.yimg.com/ib/th/id/OIP._AkFYCcD-hAKNwy8-XyYZgHaLH?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
        alt=""
      />
      <div className="flex gap-2 font-bold">
        <h1>home</h1>
        <button onClick={() => setToggle(false)} className="border-2 ">
          Page1
        </button>
        <button onClick={() => setToggle(true)} className="border-2">
          Ui card
        </button>
      </div>
      <button className="bg-amber-100 p-1 border-2 rounded-2xl">
        create user
      </button>
    </div>
  );
};
export default Navbar;
