import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-centers gap-2">
      <Image
        src="/client/logo.png"
        alt="StyleUp Logo"
        width={36}
        height={36}
        className="w-6 h-6 md:h-9 md:w-9"
      />
      <span className="hidden md:block text-amber-300 font-kaghaz font-bold text-2xl m-auto text-center tracking-wider">
        استایل آپ
      </span>
    </div>
  );
}

export default Logo;
