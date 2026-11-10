import Link from "next/link";
import Logo from "./logo";
import Container from "./container";

function Footer() {
  return (
    <footer>
      <Container className="flex flex-col items-center gap-20 pt-8 pb-4 px-6 bg-gray-950 rounded-tr-lg rounded-tl-lg">
        <div className="w-full flex flex-col items-center md:flex-row md:justify-between md:items-start gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start justify-center sm:w-3/12">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-sm text-gray-400">طراحی شده با عشق</p>
            <p className="text-sm text-gray-400">دولوپ با فرهاد</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 justify-between gap-x-2 gap-y-8">
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
        </div>
        <div className="w-full pt-2 border-t-2 border-gray-600">
          <p className="text-gray-400 text-center text-sm">
            اگر خواستید از استایل‌آپ ایده بگیرید و یا کدها رو خواستید راحت
            باشید, فقط ما رو دعا کنید
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
