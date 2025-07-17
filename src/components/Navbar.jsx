import { useState } from "react";
import Image from "next/image";
import IdekuLogo from "../assets/Ideku-Logo.png";
import AccountIcon from "../assets/account-icon.png";

const categories = [
  "All",
  "Artificial Intelligence",
  "Software as a Service",
  "EdTech",
  "Developer Tools",
  "Social Tech",
];

function Navbar({ selectedCategory, setSelectedCategory }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <nav className="bg-white p-4 fixed top-0 left-0 right-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src={IdekuLogo}
            alt="Ideku Logo"
            width={125}
            height={125}
            className="w-auto h-auto"
          />
        </a>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
            <svg
              className="w-5 h-5 text-gray-500 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-gray-700 w-100"
            />
          </div>

          <div className="relative">
            {/* Filter Category */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-8 h-8 text-gray-500 cursor-pointer"
              onClick={() => setShowModal(!showModal)}
            >
              <path
                fill="#bdc2cc"
                d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"
              />
            </svg>

            {/* Modal Filter */}
            {showModal && (
              <div className="absolute right-0 top-full mt-2 bg-white p-4 w-64 rounded shadow-lg z-50 text-gray-800">
                <h2 className="text-lg font-semibold mb-4">
                  Select a Category
                </h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li
                      key={category}
                      className={`cursor-pointer px-3 py-2 rounded ${
                        selectedCategory === category
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowModal(false);
                      }}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Account Icon */}
        <Image
          src={AccountIcon}
          alt="Account"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </nav>
  );
}

export default Navbar;
