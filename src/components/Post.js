import React, { useState } from "react";

const Post = () => {
  const [expanded, setExpanded] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false); // State for bookmark
  const [showActions, setShowActions] = useState(false); // State for Edit/Delete buttons

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked); // Toggle bookmark state
  };

  const toggleActions = () => {
    setShowActions(!showActions); // Toggle Edit/Delete buttons visibility
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Card Header */}
      <div className="flex items-center p-4 relative">
        <div className="ml-3 flex-1">
          <h3 className="text-lg font-semibold">Shrimp and Chorizo Paella</h3>
          <p className="text-sm text-gray-500">September 14, 2016</p>
        </div>

        {/* Bookmark Button */}
        <button
          className="text-gray-500 hover:text-red-500"
          onClick={handleBookmarkClick} // Bookmark click handler
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${isBookmarked ? "text-yellow-500" : ""}`} // Change color when bookmarked
            fill={isBookmarked ? "currentColor" : "none"} // Fill icon when bookmarked
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
          onMouseEnter={toggleActions} // Show actions on hover
          // onMouseLeave={toggleActions} // Hide actions when not hovering
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
          <div className="absolute top-10 right-4 bg-white shadow-md rounded-md p-2 flex flex-col space-y-2" onMouseLeave={toggleActions}>
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

      {/* Card Media */}
      <div className="m-2 rounded-lg">
        <img
          className="w-full h-48 object-cover rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgks_bY5RVLNj7C7zl6gRwArkfELwXROa4w&s"
          alt="Paella dish"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        <p className="text-sm text-gray-600">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </p>
      </div>

      {/* Card Actions */}
      <div className="flex items-center p-4 border-t">
        <button className="text-gray-500 hover:text-red-500">
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
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <h3 className="ml-1">3</h3>
      </div>

      {/* Collapsible Content */}
      <div className={`${expanded ? "block" : "hidden"} p-4 border-t`}>
        <h4 className="text-lg font-semibold mb-2">Method:</h4>
        <p className="text-sm text-gray-600 mb-2">
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
          aside for 10 minutes.
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
          medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
          occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
          large plate and set aside, leaving chicken and chorizo in the pan. Add
          pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
          stirring often until thickened and fragrant, about 10 minutes. Add
          saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Add rice and stir very gently to distribute. Top with artichokes and
          peppers, and cook without stirring, until most of the liquid is absorbed,
          15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
          mussels, tucking them down into the rice, and cook again without
          stirring, until mussels have opened and rice is just tender, 5 to 7
          minutes more. (Discard any mussels that don&apos;t open.)
        </p>
        <p className="text-sm text-gray-600">
          Set aside off of the heat to let rest for 10 minutes, and then serve.
        </p>
      </div>
    </div >
  );
};

export default Post;