
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center py-4 text-sm mt-auto">
      © 2025 Your Website. All rights reserved. | <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
    </footer>
  );
};

export default Footer;
