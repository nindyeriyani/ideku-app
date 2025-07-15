import Image from "next/image";
import IdekuLogo from "../assets/Ideku-Logo.png";
import AccountIcon from "../assets/account-icon.png";

function Navbar() {
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

        {/* Search */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-md mx-4">
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
            className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
          />
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
