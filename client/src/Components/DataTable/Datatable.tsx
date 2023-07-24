import { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { Product } from "../../utils/interfaces";
import { apiRoutes } from "../../utils/apiRoutes";
import axios from "axios";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { Link } from "react-router-dom";

export default function Datatable({
  products,
  isLoading,
}: {
  products: Product[];
  isLoading: boolean;
}) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  if (isLoading) {
    return <LoadingAnimation />;
  }
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
            <ProductRow
              key={product.id}
              product={product}
              showConfirmDelete={showConfirmDelete}
              setShowConfirmDelete={setShowConfirmDelete}
            />
          ))}
        </tbody>
      </table>
      {/* {showConfirmDelete && (
        <ConfirmDeletePopup setShowConfirmDelete={setShowConfirmDelete} />
      )} */}
    </div>
  );
}

function ProductRow({
  product,
  showConfirmDelete,
  setShowConfirmDelete,
}: {
  product: Product;
  showConfirmDelete: boolean;
  setShowConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <tr>
      <td className="border px-4 py-2 text-center">{product.id}</td>
      <td className="border px-4 py-2 text-center">{product.nom}</td>
      <td className="border px-4 py-2 text-center">{product.prix_unitaire}€</td>
      <td className="border px-4 py-2 text-center">{product.quantite}</td>
      <td className="border text-center px-1 py-1">
        <EditButton id={product.id} />
        <DeleteButton
          id={product.id}
          showConfirmDelete={showConfirmDelete}
          setShowConfirmDelete={setShowConfirmDelete}
        />
      </td>
    </tr>
  );
}

function DeleteButton({
  id,
  showConfirmDelete,
  setShowConfirmDelete,
}: {
  id: number;
  showConfirmDelete: boolean;
  setShowConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleDelete = async () => {
    setShowConfirmDelete(true);
  };
  return (
    <>
      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        <AiFillDelete />
      </button>

      {/* Confirmation popup */}
      {showConfirmDelete && (
        <ConfirmDeletePopup
          id={id}
          setShowConfirmDelete={setShowConfirmDelete}
        />
      )}
    </>
  );
}

function EditButton({ id }: { id: number }) {
  return (
    <Link to={`/admin/edit/${id}`}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded me-1 md:me-5">
        <AiFillEdit />
      </button>
    </Link>
  );
}

function ConfirmDeletePopup({
  id,
  setShowConfirmDelete,
}: {
  id: number;
  setShowConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(apiRoutes.deleteProduct(id));
      window.location.href = "/admin";
    } catch (error) {
      console.log(error);      
    }
  };
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-[#5959594d] bg-opacity-75 flex justify-center items-center min-h-screen">
      <div
        className="
      bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-md shadow-xl transform transition-all 
      "
      >
        {/* Close */}
        <div className="flex justify-end">
          <button
            className="text-gray-300 hover:text-gray-500"
            onClick={() => setShowConfirmDelete(false)}
          >
            <GrFormClose />
          </button>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Souhaitez-vous vraiment supprimer le produit?
          </h3>
        </div>

        {/* Buttons */}

        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <div className="mt-5 sm:mt-6 flex justify-center items-center gap-5">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setShowConfirmDelete(false)}
            >
              Non
            </button>

            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleDelete}
            >
              Oui
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
