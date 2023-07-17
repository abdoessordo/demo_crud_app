import { useState } from "react";
import { apiRoutes } from "../../utils/apiRoutes";
import { SearchbarProps } from "../../utils/interfaces";
import axios from "axios";

export default function Searchbar({ setProducts }: SearchbarProps) {
  const [search, setSearch] = useState<string>("");

  // search
  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSearch = async (e: any) => {
    console.log(e.key);
    if (e.key === "Enter") {
      try {
        const res = await axios.get(
          apiRoutes.searchProducts(search.toLowerCase())
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex justify-end px-4 md:justify-center">
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-400 rounded-lg px-4 py-2 "
        onChange={(e) => handleChange(e)}
        onKeyUp={(e) => handleSearch(e)}
      />
    </div>
  );
}
