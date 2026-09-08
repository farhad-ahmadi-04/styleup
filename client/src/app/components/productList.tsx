import { ProductType } from "@/types";
import Categories from "@/app/components/categories";
import ProductCard from "@/app/components/productCard";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

// temporary
const product: ProductType[] = [
  {
    id: 1,
    name: "تیشرت آدیداس CoreFit",
    shortDescription:
      "تیشرتی راحت و سبک با طراحی مدرن، مناسب استفاده روزمره و ورزشی.",
    description:
      "تیشرت آدیداس CoreFit با طراحی ساده و کاربردی، مناسب برای استفاده روزمره و فعالیت‌های ورزشی. پارچه نرم و راحت آن آزادی حرکت مناسبی فراهم می‌کند.",
    price: 3700000,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  },
  {
    id: 2,
    name: "زیپ گرم پوما Ultra Warm",
    shortDescription:
      "لباسی گرم و راحت با طراحی زیپ‌دار، مناسب روزهای سرد و استفاده روزمره.",
    description:
      "زیپ پوما Ultra Warm با طراحی گرم و کاربردی، انتخابی مناسب برای روزهای سرد. طراحی زیپ‌دار و راحت آن برای استفاده روزمره و فعالیت‌های بیرون از خانه مناسب است.",
    price: 3700000,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
  },
  {
    id: 3,
    name: "پولوشرت Nike Air Essentials",
    shortDescription:
      "پولوشرتی راحت و سبک با طراحی مینیمال، مناسب استفاده روزمره.",
    description:
      "پولوشرت Nike Air Essentials با طراحی مینیمال و راحت، برای استفاده روزمره و فعالیت‌های سبک انتخابی مناسب است. طراحی ساده آن به‌راحتی با استایل‌های مختلف هماهنگ می‌شود.",
    price: 3700000,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
  },
  {
    id: 4,
    name: "تیشرت Nike Dri Flex",
    shortDescription:
      "تیشرتی سبک و راحت با طراحی اسپرت، مناسب استفاده روزمره و ورزشی.",
    description:
      "تیشرت Nike Dri Flex با طراحی اسپرت و سبک، برای فعالیت‌های روزمره و ورزشی مناسب است. فرم راحت آن آزادی حرکت خوبی در طول روز فراهم می‌کند.",
    price: 3700000,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: { white: "/products/4w.png", pink: "/products/4p.png" },
  },
  {
    id: 5,
    name: "ژاکت Under Armour StormFleece",
    shortDescription: "ژاکتی گرم و راحت با طراحی اسپرت، مناسب روزهای سرد.",
    description:
      "ژاکت Under Armour StormFleece با طراحی گرم و اسپرت، گزینه‌ای مناسب برای روزهای سرد است. ظاهر مدرن و فرم راحت آن برای استفاده روزمره و فعالیت‌های بیرونی مناسب است.",
    price: 3700000,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/products/5r.png",
      orange: "/products/5o.png",
      black: "/products/5bl.png",
    },
  },
  {
    id: 6,
    name: "کفش Nike Air Max 270",
    shortDescription:
      "کفشی راحت و سبک با طراحی مدرن، مناسب استفاده روزمره و فعالیت‌های ورزشی.",
    description:
      "کفش Nike Air Max 270 با طراحی مدرن و راحت، برای استفاده روزمره و فعالیت‌های ورزشی سبک مناسب است. ساختار راحت آن تجربه خوبی در طول روز فراهم می‌کند.",
    price: 3700000,
    sizes: ["40", "42", "43", "44"],
    colors: ["gray", "white"],
    images: { gray: "/products/6g.png", white: "/products/6w.png" },
  },
  {
    id: 7,
    name: "کفش Nike Ultraboost Pulse",
    shortDescription:
      "کفشی سبک و راحت با طراحی اسپرت، مناسب فعالیت‌های روزمره و ورزشی.",
    description:
      "کفش Nike Ultraboost Pulse با طراحی اسپرت و ساختار راحت، انتخابی مناسب برای فعالیت‌های روزمره و ورزشی است. طراحی آن راحتی و آزادی حرکت مناسبی فراهم می‌کند.",
    price: 3700000,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: { gray: "/products/7g.png", pink: "/products/7p.png" },
  },
  {
    id: 8,
    name: "شلوار جین کلاسیک Levi’s",
    shortDescription:
      "شلوار جینی کلاسیک با طراحی ساده و کاربردی، مناسب استایل‌های روزمره.",
    description:
      "شلوار جین کلاسیک Levi’s با طراحی ساده و کاربردی، گزینه‌ای مناسب برای استایل‌های روزمره است. طراحی کلاسیک آن به‌راحتی با لباس‌های مختلف هماهنگ می‌شود.",
    price: 3700000,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { blue: "/products/8b.png", green: "/products/8gr.png" },
  },
];

function ProductList({
  category,
  params,
}: {
  category: string;
  params: "homePage" | "productsPage";
}) {
  return (
    <>
      <Categories />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {params == "homePage" && (
        <Link
          href={category ? `/products/?category=${category}` : "/products"}
          className="flex items-center gap-2 mt-4 rounded-lg shadow-lg hover:text-white hover:bg-black transition-all duration-300 px-4 py-2 w-fit"
        >
          همه محصولات
          <ArrowLeftIcon className="w-4 h-4" />
        </Link>
      )}
    </>
  );
}

export default ProductList;
