import { useState } from "react";
import { apiRoutes } from "../../utils/apiRoutes";
import axios from "axios";
import LoadingAnimation from "../../Components/LoadingAnimation/LoadingAnimation";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: any) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const handlesubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(name, description, price, image);

    const fd = new FormData();
    fd.append("image", image);

    console.log(fd);

    const config = {
      method: "post",
      url: apiRoutes.uploadImage,
      data: fd,
    };

    try {
      const res = await axios(config);
      // sending second request to add product containing the image url
      const config2 = {
        method: "post",
        url: apiRoutes.addProduct,
        data: {
          nom: name,
          quantite: Number(quantity),
          prix_unitaire: Number(price),
          img_path: res.data.path,
        },
      };
      const res2 = await axios(config2);
      console.log(res2);

      // redirect to admin page if success
      window.location.href = "/admin";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // Form to add a product
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Add Product</h1>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <form className="flex flex-col items-center justify-center">
          <CInput type="text" placeholder="Nom" onChange={setName} />

          <CInput type="number" placeholder="Quantite" onChange={setQuantity} />

          <CInput
            type="number"
            placeholder="Prix unitaire"
            onChange={setPrice}
          />

          <CInput type="file" placeholder="Image" onChange={handleFileChange} />

          <button
            className="border-2 border-gray-400 rounded-md p-2 m-2"
            type="submit"
            onClick={handlesubmit}
          >
            Add Product
          </button>
        </form>
      )}
    </div>
  );
}

function CInput({ type, placeholder, onChange }: any) {
  if (type === "file")
    return (
      <input
        className="border-2 border-gray-400 rounded-md p-2 m-2"
        type="file"
        name="myImage"
        accept="image/png, image/gif, image/jpeg"
        onChange={onChange}
      />
    );

  return (
    <input
      className="border-2 border-gray-400 rounded-md p-2 m-2"
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
