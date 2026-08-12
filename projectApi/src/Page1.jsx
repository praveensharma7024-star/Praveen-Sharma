import react, { useState } from "react";
function Page1({ elem }) {
  console.log(elem);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">{elem.title}</h1>

        <p className="mb-4 text-gray-500">Category: {elem.category}</p>

        <p className="mb-6 text-gray-600">{elem.description}</p>

        <div className="text-2xl font-bold text-green-600">${elem.price}</div>
      </div>
    </div>
  );
}
export default Page1;
