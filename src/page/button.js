import { useState } from "react";

export default function HoverMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Options
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul className="text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}
