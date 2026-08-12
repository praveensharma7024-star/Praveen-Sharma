import react, { useState, useContext } from "react";
import { MyStore } from "./context/MyContext";

const Ui = ({ elem, isCart }) => {
  const { setBttn } = useContext(MyStore);
  const [count, setCount] = useState(0);
  console.log(isCart);
  let increaseQuan = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src={elem.image}
              alt="Nature"
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold text-gray-800">{elem.title}</h2>
              <h2 className="text-2xl font-bold text-gray-800">
                {elem.category}
              </h2>
              <p className="text-gray-500 mt-2">{elem.description}</p>
              <h2 className="text-2xl font-bold text-gray-800"></h2>
              {true ? (
                <button onClick={() => increaseQuan()}>
                  <span>+ {count} -</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    return setBttn((prev) => [...prev, elem]);
                  }}
                  className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Explore
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ui;
