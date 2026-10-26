import {
  Briefcase,
  Footprints,
  Glasses,
  Hand,
  Shirt,
  ShoppingBasket,
  Venus,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "همه",
    icon: <ShoppingBasket className="w-8 h-8" />,
    slug: "all",
  },
  {
    name: "تیشرت",
    icon: <Shirt className="w-8 h-8" />,
    slug: "t-shirts",
  },
  {
    name: "کفش",
    icon: <Footprints className="w-8 h-8" />,
    slug: "shoes",
  },
  {
    name: "اکسسوری",
    icon: <Glasses className="w-8 h-8" />,
    slug: "accessories",
  },
  {
    name: "کیف",
    icon: <Briefcase className="w-8 h-8" />,
    slug: "bags",
  },
  {
    name: "لباس زنانه",
    icon: <Venus className="w-8 h-8" />,
    slug: "dresses",
  },
  {
    name: "ژاکت",
    icon: <Shirt className="w-8 h-8" />,
    slug: "jackets",
  },
  {
    name: "دستکش",
    icon: <Hand className="w-8 h-8 " />,
    slug: "gloves",
  },
];

function Categories() {
  return (
    <div className="flex gap-10 justify-center mb-4 text-sm overflow-auto">
      {categories.map((category) => (
        <Link
          href={`/shop/category/${category.slug}`}
          key={category.name}
          className="flex flex-col items-center gap-2 py-2"
        >
          <div className="flex items-center justify-center cursor-pointer rounded-full border-blue-300  p-2 border-2 text-gray-500 transition-all duration-300 hover:text-gray-700">
            <div className="bg-white  rounded-full text-2xl p-10">
              {category.icon}
            </div>
          </div>
          <span className="font-kaghaz text-lg">{category.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
