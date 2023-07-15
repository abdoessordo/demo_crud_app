const port: number = 8000;
const host: string = "localhost";
const baseURL: string = `http://${host}:${port}/api`;

export const apiRoutes = {
  addProduct: `${baseURL}/produit/add`,
  getAllProducts: `${baseURL}/produit/all`,
  searchProducts: (search: string) => `${baseURL}/produit/search?nom=${search}`,
  getProductById: (id: number) => `${baseURL}/produit/${id}`,
  updateProduct: (id: number) => `${baseURL}/produit/update/${id}`,
  deleteProduct: (id: number) => `${baseURL}/produit/delete/${id}`,
};
