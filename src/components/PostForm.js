// import React, { useState } from "react";
// import { FaTimes, FaImage } from "react-icons/fa";
// import { savePost } from "../data/postStorage";

// export default function PostForm({ onClose }) {
//   const [subject, setSubject] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   // Convert image to Base64
//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });
//   };

//   const handleImageChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const base64Image = await convertToBase64(file);
//       setImage(base64Image);
//       setImagePreview(base64Image);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Save the post data
//     const postData = {
//       id: Date.now(),
//       subject,
//       content,
//       image, // Store the Base64 image in localStorage
//     };

//     savePost(postData);

//     console.log("Post saved:", postData);
//     onClose(); // Close the form after submission
//     window.location.reload();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <div className="flex items-center justify-between mb-2">
//           <h2 className="text-xl font-semibold">Create a post</h2>
//           <button
//             type="button"
//             onClick={onClose}
//             className="text-gray-600 hover:text-gray-800"
//           >
//             <FaTimes className="w-5 h-5" />
//           </button>
//         </div>

//         <p className="text-sm text-gray-700 mb-6">Write something for your post</p>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//               Subject
//             </label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               placeholder="Enter subject"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D33852]"
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
//               Upload Image
//             </label>
//             <div className="mt-1 flex items-center">
//               <label
//                 htmlFor="image"
//                 className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm cursor-pointer bg-white hover:bg-gray-50"
//               >
//                 <FaImage className="w-5 h-7 text-gray-600 mr-3" />
//                 <span className="text-sm text-gray-700">
//                   {image ? "Image Selected" : "Add your image"}
//                 </span>
//                 <input
//                   type="file"
//                   id="image"
//                   name="image"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="sr-only"
//                 />
//               </label>
//             </div>
//             {imagePreview && (
//               <img src={imagePreview} alt="Preview" className="mt-4 w-full h-auto rounded-md shadow-md" />
//             )}
//           </div>

//           <div className="mb-6">
//             <label htmlFor="content" className="block text-sm font-medium text-gray-800 mb-1">
//               What's on your mind?
//             </label>
//             <textarea
//               id="content"
//               name="content"
//               placeholder="Type here"
//               rows="3"
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D33852]"
//               required
//             ></textarea>
//           </div>

//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-[#D33852] text-white rounded-md hover:bg-[#b72f46]"
//             >
//               Publish
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }






import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaTimes, FaImage } from "react-icons/fa";
import { savePost } from "../data/postStorage";

export default function PostForm({ onClose }) {
  const { boardId } = useParams(); // Get boardId from URL
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Convert image to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64Image = await convertToBase64(file);
      setImage(base64Image);
      setImagePreview(base64Image);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the post data with boardId
    const postData = {
      id: Date.now(),
      boardId, // Associate the post with the board
      subject,
      content,
      image, // Store the Base64 image in localStorage
    };

    savePost(postData);

    console.log("Post saved:", postData);
    onClose(); // Close the form after submission
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold">Create a post</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-gray-700 mb-6">Write something for your post</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D33852]"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
              Upload Image
            </label>
            <div className="mt-1 flex items-center">
              <label
                htmlFor="image"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm cursor-pointer bg-white hover:bg-gray-50"
              >
                <FaImage className="w-5 h-7 text-gray-600 mr-3" />
                <span className="text-sm text-gray-700">
                  {image ? "Image Selected" : "Add your image"}
                </span>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="sr-only"
                />
              </label>
            </div>
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="mt-4 w-full h-auto rounded-md shadow-md" />
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium text-gray-800 mb-1">
              What's on your mind?
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Type here"
              rows="3"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D33852]"
              required
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-[#D33852] text-white rounded-md hover:bg-[#b72f46]"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}





// import React from "react";
// import { FaTimes } from "react-icons/fa";
// import { FaImage } from "react-icons/fa";

// export default function PostForm({ onClose }) {
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
//         <div className="flex items-center justify-between mb-2">
//           <h2 className="text-xl font-semibold">Create a post</h2>
//           <button
//             type="button"
//             onClick={onClose}
//             className="text-gray-600 hover:text-gray-800"
//           >
//             <FaTimes className="w-5 h-5" /> {/* Cross icon */}
//           </button>
//         </div>

//         {/* Subtitle */}
//         <p className="text-sm text-gray-700 mb-6">
//           Write something for your post
//         </p>

//         {/* Form */}
//         <form onSubmit={handleSubmit}>
//           {/* Subject Input */}
//           <div className="mb-6">
//             <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//               Subject
//             </label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               placeholder="Enter subject"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D33852]"
//               required
//             />
//           </div>

//           {/* Image Input */}
//           <div className="mb-6">
//             <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
//               Upload Image
//             </label>
//             <div className="mt-1 flex items-center">
//               <label
//                 htmlFor="image"
//                 className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm cursor-pointer bg-white hover:bg-gray-50"
//               >
//                 <FaImage className="w-5 h-7 text-gray-600 mr-3" />
//                 <span className="text-sm text-gray-700">Add your image</span>
//                 <input
//                   type="file"
//                   id="image"
//                   name="image"
//                   accept="image/*"
//                   className="sr-only" // Hide the default input
//                 />
//               </label>
//               {/* <span className="ml-3 text-sm text-gray-500">No file chosen</span> */}
//             </div>
//           </div>

//           {/* Content Input */}
//           <div className="mb-6">
//             <label htmlFor="content" className="block text-sm font-medium text-gray-800 mb-1">
//               What's on your mind?
//             </label>
//             <textarea
//               id="content"
//               name="content"
//               placeholder="Type here"
//               rows="3"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D33852]"
//               required
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-[#D33852] text-white rounded-md hover:bg-[#b72f46]"
//             >
//               Publish
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }