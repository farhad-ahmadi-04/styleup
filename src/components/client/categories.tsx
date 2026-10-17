"use client";

import {
  Briefcase,
  Footprints,
  Glasses,
  Hand,
  Shirt,
  ShoppingBasket,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "همه",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "تیشرت",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "کفش",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "اکسسوری",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "کیف",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "لباس زنانه",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "ژاکت",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "دستکش",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

function Categories() {
  const searchParams = useSearchParams();
  const selectCategory = searchParams.get("category");
  const router = useRouter();
  const pathname = usePathname();

  /**
   * create new url from the last version of url params and then set category and then push it to url, (it won't change pathname and whit out any scrolling)
   * @param value category.slug | string
   */
  const handleParams = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
      {categories.map((category) => (
        <div
          key={category.name}
          className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-2 rounded-md ${selectCategory === category.slug ? "bg-white" : "text-gray-500"}`}
          onClick={() => handleParams(category.slug)}
        >
          {category.icon}
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Categories;
