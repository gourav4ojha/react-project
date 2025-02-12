import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaImage } from "react-icons/fa";

export default function EditPostForm({ post, onClose, onSave }) {
  const [subject, setSubject] = useState(post.subject);
  const [content, setContent] = useState(post.content);
  const [image, setImage] = useState(post.image);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...post, subject, content, image }); // Pass updated post data to parent
    onClose(); // Close the form
    window.location.reload();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Convert image to a URL
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Header with title and close button */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Edit Post</h2>
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
          {/* Subject Input */}
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

          {/* Image Input */}
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
                  {image ? "Change image" : "Add your image"}
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
          </div>

          {/* Content Input */}
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

          {/* Submit Button */}
          <div className="flex justify-end">
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