// import React from "react";
// import { FaTimes } from "react-icons/fa";

// export default function BoardForm({ onClose }) {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted!");
//     onClose(); // Close the form after submission
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         {/* Header with title and close button */}
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-semibold">Add a name for your board</h2>
//           <button
//             type="button"
//             onClick={onClose}
//             className="text-gray-600 hover:text-gray-800"
//           >
//             <FaTimes className="w-5 h-5" /> {/* Cross icon */}
//           </button>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit}>
//           {/* Board Name Input */}
//           <div className="mb-6">
//             <input
//               type="text"
//               id="boardName"
//               name="boardName"
//               placeholder="Enter board name"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D33852]"
//               required
//             />
//           </div>

//           {/* Color Selection Section */}
//           <div className="mb-12">
//             <h2 className="text-xl font-semibold mb-2">Select post colour</h2>
//             <p className="text-sm text-gray-700 mb-4">
//               Here are some templates to help you get started
//             </p>
//             <div className="flex gap-3">
//               {/* Color Options */}
//               <div className="w-7 h-7 bg-blue-500 rounded-full cursor-pointer"></div>
//               <div className="w-7 h-7 bg-gray-500 rounded-full cursor-pointer"></div>
//               <div className="w-7 h-7 bg-pink-500 rounded-full cursor-pointer"></div>
//               <div className="w-7 h-7 bg-yellow-500 rounded-full cursor-pointer"></div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-end mt-5">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-[#D33852] text-white rounded-md hover:bg-[#b72f46]"
//             >
//               Create board
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { saveBoard } from "../data/boardStorage";

export default function BoardForm({ onClose }) {
  const [boardName, setBoardName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the board data
    const boardData = {
      id: Date.now(), // Unique ID for the board
      name: boardName,
      color: selectedColor,
    };
    saveBoard(boardData);

    console.log("Board saved:", boardData);
    onClose(); // Close the form after submission
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Header with title and close button */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Add a name for your board</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Board Name Input */}
          <div className="mb-6">
            <input
              type="text"
              id="boardName"
              name="boardName"
              placeholder="Enter board name"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D33852]"
              required
            />
          </div>

          {/* Color Selection Section */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-2">Select post colour</h2>
            <p className="text-sm text-gray-700 mb-4">
              Here are some templates to help you get started
            </p>
            <div className="flex gap-3">
              {/* Color Options */}
              {["bg-green-300", "bg-slate-400", "bg-red-200", "bg-yellow-300"].map((color) => (
                <div
                  key={color}
                  className={`w-7 h-7 ${color} rounded-full cursor-pointer ${
                    selectedColor === color ? "ring-2 ring-offset-2 ring-[#D33852]" : ""
                  }`}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-5">
            <button
              type="submit"
              className="px-4 py-2 bg-[#D33852] text-white rounded-md hover:bg-[#b72f46]"
            >
              Create board
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}