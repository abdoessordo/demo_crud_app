import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../utils/interfaces";
import axios from "axios";
import { apiRoutes } from "../../utils/apiRoutes";
import LoadingAnimation from "../../Components/LoadingAnimation/LoadingAnimation";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // set window title
    document.title = `${product?.nom} | ${product?.prix_unitaire}€`;
  }, [product]);

  
  useEffect(() => {
    const getProduct = async () => {
      const product = await axios.get(apiRoutes.getProductById(Number(id)));
      setProduct(product.data);
      setIsLoading(false);
    };
    getProduct();
  }, [id]);

  const buyProduct = async () => {
    if (product) {
      setIsLoading(true);

      const data = {
        id: product?.id,
        nom: product?.nom,
        prix_unitaire: product?.prix_unitaire,
        img: product?.img,
        quantite: product?.quantite - 1,
      };

      const config = {
        method: "put",
        url: apiRoutes.updateProduct(Number(id)),
        data: data,
      };

      try {
        const res = await axios(config);
        setProduct(res.data);
        window.location.href = "/";
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    // Page with Details of a Product
    // Display img of product
    // Display name of product
    // Display price of product
    // Display a button called "Buy" That will directly buy the product

    <div className="flex flex-col items-center justify-center">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        product && (
          <div className="flex flex-col items-center justify-center">
            <img
              src={product.img && apiRoutes.getStaticImage(product.img)}
              alt={product.nom}
              className="w-80 h-80 object-cover"
            />
            <h1 className="text-2xl font-bold">{product.nom}</h1>
            <h2 className="text-xl font-bold">{product.prix_unitaire}€</h2>
            <button
              onClick={buyProduct}
              className="bg-black hover:bg-slate-700 text-white px-4 py-2 rounded-3xl transition duration-300 ease-in-out"
            >
              J'achète
            </button>
          </div>
        )
      )}
    </div>
  );
}
