import { useState, useEffect } from "react";
import axios from "axios";
import Cardsgrid from "../../Components/Cardsgrid/Cardsgrid";
import Searchbar from "../../Components/SearchBar/Searchbar";
import { Product } from "../../utils/interfaces";
import { apiRoutes } from "../../utils/apiRoutes";
import Button from "../../Components/Button/Button";
import Datatable from "../../Components/DataTable/Datatable";

export default function Admin() {
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
    <div className="md:px-[5rem]">
      <h1 className="text-3xl font-bold text-center my-8">Admin</h1>

      <div className="flex justify-between md:justify-around mb-5">
        {/* Add Product Button */}
        <Button />
        {/* Search */}
        <Searchbar setProducts={setProducts} />
      </div>
      {/* Products */}
      <Datatable products={products} isLoading={isLoading} />
    </div>
  );
}
