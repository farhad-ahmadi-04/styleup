import ProductCard from "@/components/productCard";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import Sortby from "@/components/sortby";
import { getProducts } from "@/actions/getAction";

async function ProductList({
  category,
  params,
}: {
  category: string;
  params: "homePage" | "productsPage";
}) {
  const products = await getProducts();

  return (
    <>
      {params == "productsPage" && (
        <Sortby
          options={[
            { value: "newest", label: "جدیدترین" },
            { value: "oldest", label: "قدیمی ترین" },
            { value: "asc", label: "قیمت: کمتر به بیشتر" },
            { value: "desc", label: "قیمت: بیشتر به کمتر" },
          ]}
        />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {params == "homePage" && (
        <Link
          href={category ? `/shop/category/?category=${category}` : "/shop/"}
          className="flex items-center gap-2 mt-4 rounded-lg shadow-lg hover:text-white hover:bg-black transition-all duration-300 px-4 py-2 w-fit"
        >
          همه محصولات
          <ArrowLeftIcon className="w-4 h-4" />
        </Link>
      )}
    </>
  );
}

export default ProductList;
