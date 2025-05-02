
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-2 mb-10">
      <Link to="/" className="px-4 py-2 bg-gray-200/80 rounded-md shadow-md text-gray-700 font-medium hover:bg-gray-300/80 transition-all">
        Home
      </Link>
      <Link to="/gallery" className="px-4 py-2 bg-gray-200/80 rounded-md shadow-md text-gray-700 font-medium hover:bg-gray-300/80 transition-all">
        Gallery
      </Link>
      <Link to="/contact" className="px-4 py-2 bg-gray-200/80 rounded-md shadow-md text-gray-700 font-medium hover:bg-gray-300/80 transition-all">
        Contact Us
      </Link>
    </nav>
  );
};

export default Navbar;
