"use client";

import { ProductWithRelations } from "@/actions/getAction";
import { ProductType } from "@/app/types";
import { Database } from "@/lib/supabase/database.types";
import useCartStore from "@/stores/cartStore";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

function ProductCard({ product }: { product: ProductWithRelations }) {
  const [productTypes, setProductTypes] = useState({
    size: product.variants[0]?.size,
    color: product.variants[0]?.color,
  });
  // const { addToCart } = useCartStore();

  // const handleAddToCart = () => {
  //   addToCart({
  //     ...product,
  //     quantity: 1,
  //     selectedColor: productTypes.color,
  //     selectedSize: productTypes.size,
  //   });

  //   toast.success("محصول با موفقیت اظافه شد");
  // };

  const handleProductTypes = ({
    type,
    value,
  }: {
    type: "color" | "size";
    value: string;
  }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* image */}
      <Link href={`/shop/products/${product.id}`}>
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={product.images[0].url}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>

      {/* description info */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.short_description}</p>

        {/* types */}
        <div className="flex items-center gap-5 text-xl">
          {/* sizes */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-sm">سایز</span>
            <select
              name="size"
              id="size"
              className="ring ring-gray-300 px-2 py-1 text-sm"
              defaultValue={productTypes.size}
              // onChange={(e) =>
              //   handleProductTypes({ type: "size", value: e.target.value })
              // }
            >
              {product?.variants?.map((size) => (
                <option key={size.id} value={size.size}>
                  {size.size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* colors */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-sm">رنگ</span>
            <div className="flex items-center gap-2">
              {product?.variants?.map((color) => (
                <div
                  className={`cursor-pointer border-1 rounded-full p-[1.2] ${productTypes.color === color.color ? "border-gray-500" : "border-gray-200"}`}
                  key={color.id}
                  onClick={() =>
                    handleProductTypes({ type: "color", value: color.color })
                  }
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color.color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* price and add to cart button */}
        <div className="flex items-center justify-between">
          <p className="font-medium">
            {product.price.toLocaleString("fa-IR")}تومان
          </p>
          <button
            // onClick={handleAddToCart}
            className="flex items-center  gap-2 ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4" />
            اضافه کردن
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
