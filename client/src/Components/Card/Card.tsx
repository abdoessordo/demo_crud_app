import { Link } from "react-router-dom";
import { cardProps } from "../../utils/interfaces";

export default function Card({
  id,
  title,
  description,
  price,
  image,
}: cardProps) {
  return (
    <Link to={`/product/${id}`}>
      <div
        className="bg-gray-200 p-4 flex flex-col items-center 
      hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        <div className="text-center">
          <img src={image} alt="product" />
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm">{description}</p>
          <p className="text-sm font-bold">${price}</p>
        </div>
      </div>
    </Link>
  );
}
