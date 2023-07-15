// all custom interfaces are defined here

export interface Product {
  id: number;
  nom: string;
  query_name: string;
  quantite: number;
  prix_unitaire: number;
  image?: string;
  description?: string;
}

export interface cardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface SearchbarProps {
  // products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
