import ProductCard from "@/components/productCard";
import { getProducts } from "@/actions/getAction";

async function ProductList({ category }: { category: string }) {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
