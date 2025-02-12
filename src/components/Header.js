// import logo from "../assets/logo.png";
// import React from "react";
// import { FaSearch } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa";


// export default function Header() {
//     return (
//         <>
//             <div className="w-full bg-white shadow-md">
//                 <div className="mx-auto px-4 md:px-6 py-3 max-w-7xl">
//                     <div className="flex items-center justify-between">
//                         <img src={logo} alt="logo" className="w-50 h-10" />
//                         <div className="flex items-center gap-4 flex-1 justify-end">
//                             {/* Search box  */}
//                             <div className="w-[284px] h-[40px] relative">
//                                 <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                                 <input
//                                     type="text"
//                                     placeholder="Search.."
//                                     className="w-full h-full pl-10 border-2 border-gray-300 rounded-md"
//                                 />
//                             </div>
//                             {/* Add Button  */}
//                             <button
//                                 id="add-button"
//                                 //   onClick={toggleAddOptions}
//                                 className="flex items-center gap-3 rounded-md bg-[#D33852] px-4 py-2 text-white  transition duration-100 hover:bg-[#b72f46]"
//                             >
//                                 <FaPlus />
//                                 <h1>Create new board</h1>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaSearch, FaPlus } from "react-icons/fa";
import BoardForm from "./BoardForm"; // Import the BoardForm component
import PostForm from "./PostForm"; // Import the PostForm component

export default function Header({ isPostPage = false }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <div className="w-full bg-whitemt-8 bg-green-200">
        <div className="mx-auto px-4 md:px-6 py-3 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* <img src={logo} alt="logo" className="w-50 h-10" /> */}
            <div className="flex items-center gap-4 flex-1 justify-end">
              {/* Search box */}
              {/* <div className="w-[284px] h-[40px] relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search.."
                  className="w-full h-full pl-10 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#D33852]"
                />
              </div> */}
              {/* Add Button */}
              <button
                id="add-button"
                onClick={toggleForm}
                className="flex items-center gap-3 rounded-md bg-[#D33852] px-4 py-2 text-white transition duration-100 hover:bg-[#b72f46]"
              >
                <FaPlus />
                <h1>Create new board</h1>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render the form conditionally based on the page */}
      {isFormOpen &&        
          <PostForm onClose={toggleForm} /> // Render PostForm if isPostPage is true
        }
    </>
  );
}