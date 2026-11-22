import { Skeleton } from "./ui/skeleton";

function ProductsListSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton
          key={index}
          className="aspect-[3/4] w-full rounded-xl bg-gray-300"
        />
      ))}
    </div>
  );
}

export default ProductsListSkeleton;
