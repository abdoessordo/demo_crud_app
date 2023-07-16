import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Product } from "../../utils/interfaces";
import { apiRoutes } from "../../utils/apiRoutes";
import axios from "axios";

export default function Datatable({ products }: { products: Product[] }) {
  // A table for admin to view all products and perform CRUD operations
  return (
    <div className="pt-8 px-4">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Prix</th>
            <th className="px-4 py-2">Quantité</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProductRow({ product }: { product: Product }) {
  return (
    <tr>
      <td className="border px-4 py-2 text-center">{product.id}</td>
      <td className="border px-4 py-2 text-center">{product.nom}</td>
      <td className="border px-4 py-2 text-center">{product.prix_unitaire}</td>
      <td className="border px-4 py-2 text-center">{product.quantite}</td>
      <td className="border text-center px-1 py-1 md:px-4 md:py-2">
        <EditButton />
        <DeleteButton id={product.id} />
      </td>
    </tr>
  );
}

function DeleteButton({ id }: { id: number }) {
  const handleDelete = async () => {
    try {
      const res = await axios.delete(apiRoutes.deleteProduct(id));
      console.log(res);
      window.location.href = "/admin";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      <AiFillDelete />
    </button>
  );
}

function EditButton() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded me-1 md:me-5">
      <AiFillEdit />
    </button>
  );
}
