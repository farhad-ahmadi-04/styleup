import Container from "@/components/layout/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoriesSkeleton() {
  return (
    <section>
      <Container>
        <div className="flex justify-center items-center gap-2 overflow-hidden py-2 sm:gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex min-w-0 shrink-0 flex-col items-center gap-2"
            >
              <Skeleton className="h-24 w-24 rounded-full border-2 border-amber-600 p-2 lg:h-40 lg:w-40 bg-gray-200" />
              <Skeleton className="h-6 w-20 bg-gray-200" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
