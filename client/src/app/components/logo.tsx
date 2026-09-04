import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-centers gap-2">
      <Image src="/logo.png" alt="StyleUp Logo" width={40} height={40} />
      <span className="font-kaghaz font-bold text-2xl m-auto text-center">
        استایل آپ
      </span>
    </div>
  );
}

export default Logo;
