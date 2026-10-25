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
    icon: <ShoppingBasket className="w-10 h-10" />,
    slug: "all",
  },
  {
    name: "تیشرت",
    icon: <Shirt className="w-10 h-10" />,
    slug: "t-shirts",
  },
  {
    name: "کفش",
    icon: <Footprints className="w-10 h-10" />,
    slug: "shoes",
  },
  {
    name: "اکسسوری",
    icon: <Glasses className="w-10 h-10" />,
    slug: "accessories",
  },
  {
    name: "کیف",
    icon: <Briefcase className="w-10 h-10" />,
    slug: "bags",
  },
  {
    name: "لباس زنانه",
    icon: <Venus className="w-10 h-10" />,
    slug: "dresses",
  },
  {
    name: "ژاکت",
    icon: <Shirt className="w-10 h-10" />,
    slug: "jackets",
  },
  {
    name: "دستکش",
    icon: <Hand className="w-10 h-10 " />,
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
    <div className="flex gap-10 justify-center mb-4 text-sm overflow-auto">
      {categories.map((category) => (
        <div className="flex flex-col items-center gap-2 py-2">
          <div
            key={category.name}
            className={`flex items-center justify-center cursor-pointer rounded-full border-blue-300  ${selectCategory === category.slug ? " p-0 border-4" : "text-gray-500 border-2  p-2"}`}
            onClick={() => handleParams(category.slug)}
          >
            <div
              className={`bg-white  rounded-full text-2xl ${selectCategory === category.slug ? "p-12" : "p-10"}`}
            >
              {category.icon}
            </div>
          </div>
          <span className="font-kaghaz text-lg">{category.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Categories;
