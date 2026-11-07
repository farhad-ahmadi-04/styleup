import { cn } from "@/lib/utils";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("lg:container px-4 m-auto", className)}>{children}</div>
  );
}

export default Container;
