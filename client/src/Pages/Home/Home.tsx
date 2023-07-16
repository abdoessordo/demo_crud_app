import { useState, useEffect } from "react";
import axios from "axios";
import { apiRoutes } from "../../utils/apiRoutes";
import Cardsgrid from "../../Components/Cardsgrid/Cardsgrid";
import { Product } from "../../utils/interfaces";
import Searchbar from "../../Components/SearchBar/Searchbar";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // get all products
  const getAllProducts = async () => {
    try {
      const res = await axios.get(apiRoutes.getAllProducts);
      setProducts(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">Home</h1>
      <Searchbar setProducts={setProducts} />
      <Cardsgrid products={products} isLoading={isLoading} />
    </>
  );
}
