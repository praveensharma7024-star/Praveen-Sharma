import react, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
function Detail1() {
  const [singleProduct, setSingleProduct] = useState([]);
  let { id } = useParams();
  let getSingleProduct = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res.data);
      setSingleProduct(res.data);
    } catch (error) {
      console.log("detail api error", error);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <div className="w-200 rounded-xl shadow-lg bg-white p-4 flex p-3.5">
      <img
        src={singleProduct.image}
        alt={singleProduct.title}
        className="h-48 w-full object-contain"
      />
      <div>
        <h2 className="mt-4 text-lg font-bold">{singleProduct.title}</h2>
        <p className="mt-2 text-gray-500">{singleProduct.category}</p>
        <p className="mt-2 text-gray-500">{singleProduct.description}</p>
        <p className="mt-2 text-xl font-semibold">${singleProduct.price}</p>
      </div>
    </div>
  );
}
export default Detail1;
