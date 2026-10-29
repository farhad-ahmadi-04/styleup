import { getCategories } from "@/actions/getAction";
import Image from "next/image";
import Link from "next/link";

async function Categories() {
  const categories = await getCategories();

  if (!categories) return <p>دسته بندی نیست</p>;

  return (
    <div className="flex gap-10 justify-center mb-4 text-sm overflow-auto">
      {categories.map((category) => (
        <Link
          href={`/shop/category/${category.slug}`}
          key={category.slug}
          className="flex flex-col items-center gap-2 py-2"
        >
          <div className="flex items-center justify-center cursor-pointer rounded-full border-blue-300  p-2 border-2 text-gray-500 transition-all duration-300 hover:text-gray-700">
            <div className="flex items-center justify-center bg-white  rounded-full w-20 h-20 lg:w-36 lg:h-36">
              <Image
                src={category.image || "/logo.png"}
                width={100}
                height={100}
                alt={category.name}
                className="w-14 h-14 lg:w-24 lg:h-24"
              />
            </div>
          </div>
          <span className="font-kaghaz text-lg">{category.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
