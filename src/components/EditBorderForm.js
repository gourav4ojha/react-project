import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function EditBoardForm({ board, onClose, onSave }) {
  const [name, setName] = useState(board.name);
  const [color, setColor] = useState(board.color);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...board, name, color }); // Pass updated board data to parent
    onClose(); // Close the form
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Header with title and close button */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Edit Board</h2>
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
            <label htmlFor="boardName" className="block text-sm font-medium text-gray-700 mb-1">
              Board Name
            </label>
            <input
              type="text"
              id="boardName"
              name="boardName"
              placeholder="Enter board name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D33852]"
              required
            />
          </div>

          {/* Color Selection Section */}
          <div className="mb-6">
            <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">
              Select Board Color
            </label>
            <div className="flex gap-3">
              {["bg-green-300", "bg-slate-400", "bg-red-200", "bg-yellow-300"].map((colorOption) => (
                <div
                  key={colorOption}
                  className={`w-7 h-7 ${colorOption} rounded-full cursor-pointer ${
                    color === colorOption ? "ring-2 ring-offset-2 ring-[#D33852]" : ""
                  }`}
                  onClick={() => setColor(colorOption)}
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}