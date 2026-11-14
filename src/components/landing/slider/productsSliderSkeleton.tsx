import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsSliderSkeleton() {
  return Array.from({ length: 4 }).map((_, index) => (
    <div key={index} className={index >= 2 ? `hidden md:block` : ""}>
      <Skeleton className="aspect-[3/4] w-full rounded-xl bg-gray-200" />
    </div>
  ));
}
