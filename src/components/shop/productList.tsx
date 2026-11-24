"use client";

import ProductCard from "@/components/shop/productCard";
import {
  getProducts,
  getProductsByCategory,
  ProductWithRelations,
} from "@/actions/products";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductsListSkeleton from "./productsListSkeleton";

function ProductList({ category }: { category?: string }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<ProductWithRelations[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetching() {
      const perPage = Number(searchParams.get("per_page")) || 12;
      const sortby = searchParams.get("sortby");
      let sorting = { sortby: "created_at", value: false };
      switch (sortby) {
        case "newest":
          sorting = { sortby: "created_at", value: false };
          break;
        case "oldest":
          sorting = { sortby: "created_at", value: true };
          break;
        case "asc":
          sorting = { sortby: "final_price", value: true };
          break;
        case "desc":
          sorting = { sortby: "final_price", value: false };
          break;

        default:
          break;
      }

      try {
        if (category) {
          const data = await getProductsByCategory({
            range: perPage - 1,
            order: sorting,
            category: category,
          });
          setProducts(data);
        } else {
          const data = await getProducts({
            range: perPage - 1,
            order: sorting,
          });
          setProducts(data);
        }
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    }

    fetching();
  }, [searchParams]);

  if (isLoading) return <ProductsListSkeleton />;
  if (error)
    return (
      <p className="w-full text-center text-gray-50 py-4 bg-red-500 rounded-2xl">
        {error}
      </p>
    );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
