// src/data/postStorage.js

const STORAGE_KEY = "posts";
const BOOKMARKS_KEY = "bookmarkedPosts";
const LIKES_KEY = "likedPosts";

// Save a new post
export const savePost = (postData) => {
  const posts = getPosts();
  const index = posts.findIndex((post) => post.id === postData.id);
  if (index !== -1) {
    posts[index] = postData;
  }else{

    posts.push(postData);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};

// Get all posts
export const getPosts = () => {
  const posts = localStorage.getItem(STORAGE_KEY);
  return posts ? JSON.parse(posts) : [];
};

// Delete a post by ID
export const deletePost = (postId) => {
  const posts = getPosts();
  const updatedPosts = posts.filter((post) => post.id !== postId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
};

// Clear all posts (optional)
export const clearPosts = () => {
  localStorage.removeItem(STORAGE_KEY);
};

// Save bookmarks
export const saveBookmarks = (bookmarks) => {
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
};

// Get bookmarks
export const getBookmarks = () => {
  const bookmarks = localStorage.getItem(BOOKMARKS_KEY);
  return bookmarks ? JSON.parse(bookmarks) : [];
};

// Save likes
export const saveLikes = (likes) => {
  localStorage.setItem(LIKES_KEY, JSON.stringify(likes));
};

// Get likes
export const getLikes = () => {
  const likes = localStorage.getItem(LIKES_KEY);
  return likes ? JSON.parse(likes) : [];
};
