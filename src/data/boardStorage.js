const STORAGE_KEY = "boards";

// Save or update a board
export const saveBoard = (boardData) => {
  const boards = getBoards();
  const index = boards.findIndex((board) => board.id === boardData.id); // Find the index of the board to update
  if (index !== -1) {
    boards[index] = boardData; // Replace the old board with the updated one
  } else {
    boards.push(boardData); // Add a new board if it doesn't exist
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(boards));
};

// Get all boards
export const getBoards = () => {
  const boards = localStorage.getItem(STORAGE_KEY);
  return boards ? JSON.parse(boards) : [];
};

// Delete a board by ID
export const deleteBoard = (boardId) => {
  const boards = getBoards();
  const updatedBoards = boards.filter((board) => board.id !== boardId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBoards));
};

// Clear all boards (optional)
export const clearBoards = () => {
  localStorage.removeItem(STORAGE_KEY);
};