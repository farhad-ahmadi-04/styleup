async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  return <h1>category page: {(await params).categorySlug}</h1>;
}

export default CategoryPage;
