import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaSearch, FaPlus } from "react-icons/fa";

export default function PostsNavbar({ isBookmarked, setIsBookmarked, onSearch }) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass the search term to the parent component
  };

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked); // Toggle bookmark state
  };

  const handleSearchMouseEnter = () => {
    setIsSearching(true);
  };

  const handleSearchMouseLeave = () => {
    if (!searchTerm) {
      setIsSearching(false);
    onSearch(""); // Reset search term when leaving the search bar
    setSearchTerm(""); // Clear the search term
    }
  };

  return (
    <div className="w-full bg-white shadow-md">
      <div className="mx-auto px-4 md:px-6 py-3 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img src={logo} alt="logo" className="w-50 h-10" />

          {/* Right-side actions */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            {/* Search box */}
            <div
              onMouseEnter={handleSearchMouseEnter}
              onMouseLeave={handleSearchMouseLeave}
            >
              {!isSearching ? (
                <div className="cursor-pointer w-full h-full relative">
                  <FaSearch className="text-gray-400" />
                </div>
              ) : (
                <div className="w-full h-full relative">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search.."
                    className="w-full h-full pl-10 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#D33852]"
                    autoFocus
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              )}
            </div>

            {/* Separator */}
            <div className="text-gray-500">|</div>

            {/* Bookmark Button */}
            <button
              className="text-gray-500 hover:text-red-500"
              onClick={handleBookmarkClick}
              aria-label={isBookmarked ? "Unbookmark" : "Bookmark"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${isBookmarked ? "text-yellow-500" : ""}`}
                fill={isBookmarked ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import logo from "../assets/logo.png";
// import { FaSearch, FaPlus } from "react-icons/fa";

// export default function PostsNavbar({ isBookmarked, setIsBookmarked }) {
//   return (
//     <div className="w-full bg-gray-100 p-4 flex items-center justify-between">
//       <img src={logo} alt="Logo" className="h-10" />

//       {/* Bookmark Toggle Button */}
//       <button
//         onClick={() => setIsBookmarked(!isBookmarked)}
//         className={`px-4 py-2 rounded-lg ${isBookmarked ? "bg-yellow-500 text-white" : "bg-gray-300"}`}
//       >
//         {isBookmarked ? "Show All" : "Show Bookmarked"}
//       </button>

//       {/* Search Input */}
//       <div className="relative">
//         <input type="text" placeholder="Search..." className="px-3 py-2 rounded-lg border" />
//         <FaSearch className="absolute right-3 top-3 text-gray-500" />
//       </div>

//       {/* Add Post Button */}
//       <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
//         <FaPlus className="mr-2" /> Add Post
//       </button>
//     </div>
//   );
// }
