import ProductCard from "@/components/productCard";
import { getProducts } from "@/actions/getAction";

async function ProductList({ category }: { category: string }) {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
