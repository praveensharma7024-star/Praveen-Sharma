import react, { useState, useEffect, useContext } from "react";
import Ui from "./Ui";

import Navbar from "./Navbar";
import Page1 from "./Page1";
import axios from "axios";
import { MyStore } from "./context/MyContext";
function App() {
  const [productData, setProductData] = useState([]);
  const { bttn, toggle } = useContext(MyStore);

  const apiCall = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (error) {
      console.log("error in fatch in api");
    }
  };
  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {toggle ? (
        <div className="grid grid-cols-4">
          {productData.map((elem, index) => {
            let isCart = !!bttn.find((val) => {
              val.id == elem.id;
            });
            return <Ui elem={elem} isCart={isCart} key={index} />;
          })}
        </div>
      ) : (
        <div className="grid grid-cols-2">
          {bttn.map((elem, index) => {
            return <Page1 elem={elem} key={index} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
