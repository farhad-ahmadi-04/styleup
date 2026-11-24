import { cn } from "@/lib/utils";
import Image from "next/image";

function Logo({ className }: { className?: string }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="StyleUp Logo"
        width={36}
        height={36}
        className="w-6 h-6 md:h-9 md:w-9"
      />
      <span
        className={cn(
          "hidden md:block text-amber-600 font-kaghaz font-bold text-2xl  text-center tracking-wider",
          className,
        )}
      >
        استایل آپ
      </span>
    </div>
  );
}

export default Logo;
