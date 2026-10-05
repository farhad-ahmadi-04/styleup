import Link from "next/link";
import Logo from "./logo";

function Footer() {
  return (
    <footer>
      <div className="lg:container m-auto mt-16  flex flex-col items-center gap-8 md:gap-0 md:flex-row md:justify-between md:items-start bg-gray-800 p-8 rounded-tr-lg rounded-tl-lg">
        <div className="flex flex-col gap-4 items-center">
          <Link href="/">
            <Logo />
          </Link>
          <p className="text-sm text-gray-400">طراحی شده با عشق</p>
          <p className="text-sm text-gray-400">دولوپ با فرهاد</p>
        </div>

        <div className="flex  flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
          <p className="text-sm text-amber-50">استایل آپ</p>
          <Link href="/">خانه</Link>
          <Link href="/">تماس با ما</Link>
          <Link href="/">خدمات</Link>
          <Link href="/">حریم خصوصی</Link>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
          <p className="text-sm text-amber-50">استایل آپ</p>
          <Link href="/">همه محصولات</Link>
          <Link href="/">محصولات جدید</Link>
          <Link href="/">پیشنهاد ویژه</Link>
          <Link href="/">فروش ویژه</Link>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
          <p className="text-sm text-amber-50">استایل آپ</p>
          <Link href="/">درباره ما</Link>
          <Link href="/">تماس با ما</Link>
          <Link href="/">بلاگ</Link>
          <Link href="/">همینطوری</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
