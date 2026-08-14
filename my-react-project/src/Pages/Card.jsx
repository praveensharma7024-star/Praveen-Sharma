import react, { useContext, useState } from "react";
import { useNavigate } from "react-router";
function Card({ elem }) {
  let navigate = useNavigate();
  return (
    <div>
      <div>
        <div
          onClick={() => navigate(`/Detail2/${elem.id}`)}
          className="min-h-screen bg-gray-100 flex items-center justify-center"
        >
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

              <button
                onClick={() => {
                  return setBttn((prev) => [...prev, elem]);
                }}
                className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
