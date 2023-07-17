import { Link } from "react-router-dom";
import { Product } from "../../utils/interfaces";
import { apiRoutes } from "../../utils/apiRoutes";

export default function Card({
  product: { id, nom, prix_unitaire, img },
  hover,
}: {
  product: Product;
  hover?: boolean;
}) {
  if (hover)
    return (
      <Link to={`/product/${id}`}>
        <div
          className="bg-gray-200 p-4 flex flex-col items-center 
      hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          <div className="text-center">
            <img
              src={`http://localhost:8000/api/${img}`}
              alt="product"
              className="w-80 h-80 object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg font-bold">{nom}</h2>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-sm font-bold">{prix_unitaire}€</p>
          </div>
        </div>
      </Link>
    );

  return (
    <div
      className="bg-gray-200 p-4 flex flex-col items-center 
       transition duration-300 ease-in-out transform "
    >
      <div className="text-center">
        <img
          src={img && apiRoutes.getStaticImage(img)}
          alt="product"
          className="w-80 h-80 object-cover"
        />
      </div>
      <div className="text-center">
        <h2 className="text-lg font-bold">{nom}</h2>
        {/* <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p> */}
        <p className="text-sm font-bold">{prix_unitaire}€</p>
      </div>
    </div>
  );
}
