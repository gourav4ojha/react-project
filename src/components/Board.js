import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Board() {
  const [showActions, setShowActions] = useState(false); // State to manage visibility of actions

  const toggleActions = () => {
    setShowActions(!showActions); // Toggle visibility
  };

  return (
    <>
      <div className="flex max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Color Block */}
        <div className="w-1/3 bg-blue-500"></div>

        {/* Right Side - Description */}
        <div className="w-2/3 p-4 relative">
        <div className="flex">
          <div>
            <Link to='./board'>
          <p className="mt-2 text-gray-600">
            This is a simple card where the left side is a solid color
          </p>
            </Link>
          </div>
          <div>
          {/* Settings Button */}
          <button
            className="text-gray-500 hover:text-gray-700 m-2"
            onClick={toggleActions} // Toggle actions visibility
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>

          {/* Edit and Delete Buttons */}
          {showActions && (
            <div className="absolute top-10 right-2 bg-white shadow-md rounded-md p-2 flex flex-col space-y-2">
              <button className="text-gray-600 hover:text-blue-500 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Edit
              </button>
              <button className="text-gray-600 hover:text-red-500 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Delete
              </button>
            </div>
          )}
        </div>
        </div>
        </div>
      </div>
    </>
  );
}