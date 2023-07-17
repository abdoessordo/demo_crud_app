import { useEffect, useState } from "react";
import ProductForm from "../../Components/ProductForm/ProductForm";
import { useParams } from "react-router-dom";
import { FormType, Product } from "../../utils/interfaces";
import { apiRoutes } from "../../utils/apiRoutes";
import Card from "../../Components/Card/Card";
import LoadingAnimation from "../../Components/LoadingAnimation/LoadingAnimation";

export default function ModifyProductPage() {
  // get id from url
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    // set window title
    document.title = `Modifier | ${product?.nom} | ${product?.prix_unitaire}€`;
  }, [product]);

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);

      const res = await fetch(apiRoutes.getProductById(Number(id)));
      const data = await res.json();

      setProduct(data);
      setIsLoading(false);
    };

    getProduct();
  }, []);

  return (
    <div
      className="
    mx-5 p-4 flex flex col justify-center
    "
    >
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="flex flex-col gap-6 md:gap-0 justify-between items-center bg-gray-100 p-8">
          <h1 className="text-2xl font-bold pb-5">Modifier un produit</h1>
          {/* Form */}
          <ProductForm
            setIsLoading={setIsLoading}
            formType={FormType.Edit}
            product={product}
          />
          {/* Display product Card */}
          <div className="w-80 mt-5">
            {product && <Card product={product} />}
          </div>
        </div>
      )}
    </div>
  );
}
