import React, { useState, useEffect } from "react";
import logo from "../assets/logo2.png";
import Back from "../assets/bracket-left.png";
import { FaSearch, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {  getBoards } from "../data/boardStorage";

export default function PostsNavbar({ isBookmarked, setIsBookmarked, onSearch}) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [boardName, setBoardName] = useState("");
  const { id: boardId } = useParams();

  useEffect(() => {
    // console.log("boardId from useParams:", boardId, "Type:", typeof boardId);
  
    const boards = getBoards();
    // console.log("All boards:", boards);
  
    const numericBoardId = Number(boardId);
    // console.log("Converted boardId to number:", numericBoardId, "Type:", typeof numericBoardId);
  
    const selectedBoard = boards.find((board) => board.id === numericBoardId);
    // console.log("Selected Board:", selectedBoard);
  
    if (selectedBoard) {
      setBoardName(selectedBoard.name);
    }
  }, [boardId]);
  

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
          <Link to="/" className="flex">
          <img src={Back} alt="back" className="w-50 h-10 pt-2" />
          <img src={logo} alt="logo" className="w-50 h-12" />
          </Link>
          {isBookmarked? <h1 className="font-bold ml-2">My bookmarks</h1>:<h1 className="font-bold ml-2">{boardName || "Board"}</h1> }
          {/* <h1 className="font-bold ml-2 text-xl font-semibold">{boardName || "Board"}</h1> */}

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
                className={`h-6 w-6 ${isBookmarked ? "text-stone-900" : ""}`}
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
