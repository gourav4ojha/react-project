import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import PostsNavbar from "../components/PostsNavbar";
import Header from "../components/Header";
import {
  getPosts,
  deletePost,
  getBookmarks,
  saveBookmarks,
  getLikes,
  saveLikes,
  savePost,
} from "../data/postStorage";
import EditPostForm from "../components/EditPostForm";
import Nopost from "../assets/backgroundimag.svg";

export default function Board() {
  const { boardId } = useParams(); // Get boardId from URL
  const [posts, setPosts] = useState([]);
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [showActionsId, setShowActionsId] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const allPosts = getPosts();
    const filteredPosts = allPosts.filter((post) => post.boardId === boardId);
    setPosts(filteredPosts);
    setBookmarkedPosts(getBookmarks());
    setLikedPosts(getLikes());
  }, [boardId]);

  const handleSearch = (term) => setSearchTerm(term);
  const handleExpandClick = (postId) => setExpandedPostId(expandedPostId === postId ? null : postId);
  const handleBookmarkClick = (postId) => {
    let updatedBookmarks = bookmarkedPosts.includes(postId)
      ? bookmarkedPosts.filter((id) => id !== postId)
      : [...bookmarkedPosts, postId];
    setBookmarkedPosts(updatedBookmarks);
    saveBookmarks(updatedBookmarks);
  };
  const handleLikeClick = (postId) => {
    let updatedLikes = likedPosts.includes(postId)
      ? likedPosts.filter((id) => id !== postId)
      : [...likedPosts, postId];
    setLikedPosts(updatedLikes);
    saveLikes(updatedLikes);
  };
  const toggleActions = (postId) => setShowActionsId(showActionsId === postId ? null : postId);
  const handleDeletePost = (postId) => {
    deletePost(postId);
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    setShowActionsId(null);
  };
  const handleEditPost = (post) => setEditingPost(post);
  const handleSavePost = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
    savePost(updatedPost);
    setEditingPost(null);
  };

  const filteredPosts = posts.filter((post) =>
    (post.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (!isBookmarked || bookmarkedPosts.includes(post.id))
  );

  return (
    <>
      <PostsNavbar
        isBookmarked={isBookmarked}
        setIsBookmarked={setIsBookmarked}
        onSearch={handleSearch} // Pass the search handler
      />
      <Header isPostPage={true} />

      <div className="flex flex-wrap justify-left gap-3 relative bg-green-200">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
              {/* Card Header */}
              <div className="flex items-center p-4 relative">
                <div className="ml-3 flex-1">
                  <h3 className="text-lg font-semibold">{post.subject}</h3>
                  <p className="text-sm text-gray-500">{new Date(post.id).toLocaleDateString()}</p>
                </div>

                {/* Bookmark Button */}
                <button
                  className="text-gray-500 hover:text-yellow-500"
                  onClick={() => handleBookmarkClick(post.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${bookmarkedPosts.includes(post.id) ? "text-yellow-500" : ""}`}
                    fill={bookmarkedPosts.includes(post.id) ? "currentColor" : "none"}
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

                {/* Settings Button */}
                <button
                  className="text-gray-500 hover:text-gray-700 ml-2"
                  onMouseEnter={() => toggleActions(post.id)}
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
                {showActionsId === post.id && (
                  <div
                    className="absolute top-10 right-4 bg-white shadow-md rounded-md p-2 flex flex-col space-y-2"
                    onMouseLeave={() => toggleActions(post.id)}
                  >
                    <button
                      className="text-gray-600 hover:text-blue-500 flex items-center"
                      onClick={() => handleEditPost(post)}
                    >
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
                    <button
                      className="text-gray-600 hover:text-red-500 flex items-center"
                      onClick={() => handleDeletePost(post.id)}
                    >
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

              {/* Card Media */}
              {post.image && (
                <div className="m-2 rounded-lg">
                  <img className="w-full h-48 object-cover rounded-lg" src={post.image} alt="Post" />
                </div>
              )}

              {/* Card Content */}
              <div className="p-4">
                <p className="text-sm text-gray-600">{post.content}</p>
              </div>

              {/* Card Actions */}
              <div className="flex items-center p-4 border-t">
                <button
                  className="text-gray-500 hover:text-red-500"
                  onClick={() => handleLikeClick(post.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill={likedPosts.includes(post.id) ? "red" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <h3 className="ml-1">{likedPosts.includes(post.id) ? 1 : 0}</h3>
              </div>
            </div>
          ))
        ) : (
          <div className="h-screen">
            <div className="flex flex-col items-center justify-center w-screen text-center">
              <img src={Nopost} alt="your post" className="max-w-full max-h-full mt-20" />
              <h1 className="mt-4 text-2xl font-bold">Nothing here yet</h1>
              <h3 className="mt-2 text-lg">Create your first post by clicking on the '+' button above</h3>
            </div>
          </div>
        )}
      </div>

      {/* Render Edit Form if a post is being edited */}
      {editingPost && (
        <EditPostForm
          post={editingPost}
          onClose={() => setEditingPost(null)}
          onSave={handleSavePost}
        />
      )}
    </>
  );
}


