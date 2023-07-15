import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gray-800 text-white text-center py-2">
      <ul className="flex justify-center">
        <li className="mr-4">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  );
}
