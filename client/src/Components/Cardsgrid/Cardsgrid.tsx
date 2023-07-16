import { Product } from "../../utils/interfaces";
import Card from "../Card/Card";

export default function Cardsgrid({ products }: { products: Product[] }) {
  return (
    <div className="home container mx-auto px-4 py-8">
      {/* grid of all products */}
      {/* for large screens columns of 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.map((product: Product) => (
          <Card
            id={product.id}
            title={product.nom}
            description="Product description"
            price={product.prix_unitaire}
            image="https://picsum.photos/200/300"
          />
        ))}
      </div>
    </div>
  );
}
