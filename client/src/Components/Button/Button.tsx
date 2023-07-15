import { Link } from "react-router-dom";

export default function Button() {
  return (
    /* Add Product Button */
    <div className="flex justify-start px-4">
      <Link
        to="/admin/add"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-lg"
      >
        Add Product
      </Link>
    </div>
  );
}
