import ProductList from "@/components/shop/productList";

async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const categoryId = (await params).categorySlug.split("_")[1];
  console.log(categoryId);

  return <ProductList category={categoryId} />;
}

export default CategoryPage;
