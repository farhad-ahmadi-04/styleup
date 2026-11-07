import { cn } from "@/lib/utils";

function Container({ children }: { children: React.ReactNode }) {
  return <div className={cn("lg:container px-4 m-auto")}>{children}</div>;
}

export default Container;
