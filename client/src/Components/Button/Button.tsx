import { Link } from "react-router-dom";

export default function Button() {
  return (
    /* Add Product Button */
    <div className="flex justify-center px-4">
      <Link
        to="/admin/add"
        className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-6 rounded-3xl shadow-lg transition duration-300 ease-in-out"
      >
        Ajouter
      </Link>
    </div>
  );
}
