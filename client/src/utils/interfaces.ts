// all custom interfaces are defined here

export interface Product {
  id: number;
  nom: string;
  query_name: string;
  quantite: number;
  prix_unitaire: number;
  img?: string;
}

export interface cardProps {
  id: number;
  nom: string;
  description?: string;
  prix_unitaire: number;
  img: string;
}

export interface SearchbarProps {
  // products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export enum FormType {
  Add,
  Edit,
}
