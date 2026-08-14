import react, { useEffect, useContext } from "react";
import axios from "axios";
import Card from "./Card";
import { Outlet } from "react-router";
import { MyStore } from "../Context/MyStore";
function Home() {
  let { product, setProduct } = useContext(MyStore);
  let getData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProduct(res.data);
    } catch (error) {
      console.log("error in coming data", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-2 p-2">
        {product.map((elem, index) => {
          return <Card elem={elem} key={index} />;
        })}
      </div>
      <Outlet />
    </div>
  );
}
export default Home;
