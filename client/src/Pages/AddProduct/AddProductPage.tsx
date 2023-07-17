import { useState } from "react";
import LoadingAnimation from "../../Components/LoadingAnimation/LoadingAnimation";
import ProductForm from "../../Components/ProductForm/ProductForm";
import { FormType } from "../../utils/interfaces";

export default function AddProductPage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    // Form to add a product
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-5">Add Product</h1>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
          <ProductForm setIsLoading={setIsLoading} formType={FormType.Add} />
      )}
    </div>
  );
}
