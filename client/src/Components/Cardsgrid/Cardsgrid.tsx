import { Product } from "../../utils/interfaces";
import Card from "../Card/Card";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

export default function Cardsgrid({
  products,
  isLoading,
}: {
  products: Product[];
  isLoading: boolean;
}) {
  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <div className="home container mx-auto px-4 py-8">
      {/* grid of all products */}
      {/* for large screens columns of 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.map((product: Product) => (
          <Card product={product} hover={true} key={product.id} />
        ))}
      </div>
    </div>
  );
}
