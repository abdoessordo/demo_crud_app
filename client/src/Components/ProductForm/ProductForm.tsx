import React, { useEffect, useState } from "react";
import { apiRoutes } from "../../utils/apiRoutes";
import axios from "axios";
import { FormType, Product } from "../../utils/interfaces";

export default function ProductForm({
  setIsLoading,
  formType,
  product,
}: {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  formType: FormType;
  product?: Product;
}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.nom);
      setQuantity(product.quantite);
      setPrice(product.prix_unitaire);
    }
  }, [product]);

  const handleFileChange = (e: any) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const handlesubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

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

      let urlType;
      let method;

      if (formType === FormType.Add) {
        urlType = apiRoutes.addProduct;
        method = "post";
      } else if (formType === FormType.Edit && product) {
        urlType = apiRoutes.updateProduct(product?.id);
        method = "put";
      }

      const config2 = {
        method: method,
        url: urlType,
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
    <form className="flex flex-col items-center justify-center px-3">
      <div className="grid grid-cols-3 gap-4 gap-x-2 items-center justify-center auto-cols-max flex items-center">
        <div>
          <label
            className="text-gray-700 text-sm font-bold mb-2 col-span-1
        "
          >
            Nom
          </label>
        </div>

        <CInput
          type="text"
          placeholder="Nom"
          onChange={setName}
          value={formType === FormType.Edit ? product?.nom : name}
        />

        {/* 
      if formType is edit, we need to add labels to the inputs
       */}
        <div>
          <label className="text-gray-700 text-sm font-bold mb-2 col-span-1">
            Quantite
          </label>
        </div>

        <CInput
          type="number"
          placeholder="Quantite"
          onChange={setQuantity}
          value={formType === FormType.Edit ? product?.quantite : quantity}
        />
        <div>
          <label className="text-gray-700 text-sm font-bold mb-2 col-span-1">
            Prix unitaire (€)
          </label>
        </div>
        <CInput
          type="number"
          placeholder="Prix unitaire"
          onChange={setPrice}
          value={formType === FormType.Edit ? product?.prix_unitaire : price}
          step={0.1}
        />
      </div>

      <CInput type="file" placeholder="Image" onChange={handleFileChange} />

      <button
        className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-6 rounded-3xl m-2"
        type="submit"
        onClick={handlesubmit}
      >
        {formType === FormType.Add && "Ajouter"}
        {formType === FormType.Edit && "Modifier"}
      </button>
    </form>
  );
}

function CInput({
  type,
  placeholder,
  onChange,
  value,
  step,
}: {
  type: string;
  placeholder: string;
  onChange: any;
  value?: any;
  step?: number;
}) {
  if (type === "file")
    return (
      <input
        className="border-2 border-gray-400 rounded-md p-2 m-2 w-[90%]"
        type="file"
        name="myImage"
        accept="image/png, image/gif, image/jpeg"
        onChange={onChange}
      />
    );

  return (
    // if label is passed, render a label
    <div className="col-span-2 flex justify-end items-center">
      <input
        className="border-2 border-gray-400 rounded-md p-2 m-0 w-[90%] 
        "
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        defaultValue={value}
        step={step}
      />
    </div>
  );
}
