import { Link } from "react-router-dom";

export default function Footer() {
  // stick to the bottom of the page
  return (
    <div className="bg-gray-800 text-white text-center py-2">
      Realisé par <Link className="
      text-blue-500
      " to="https://github.com/abdoessordo" target="
      _blank
      ">Abdellah ESSORDO</Link>
    </div>
  );
}
