"use client";

import { ProductType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ProductCard({ product }: { product: ProductType }) {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

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
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={product.images[productTypes.color]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>

      {/* description info */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>

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
              onChange={(e) =>
                handleProductTypes({ type: "size", value: e.target.value })
              }
            >
              {product?.sizes?.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* colors */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-sm">رنگ</span>
            <div className="flex items-center gap-2">
              {product?.colors?.map((color) => (
                <div
                  className={`cursor-pointer border-1 rounded-full p-[1.2] ${productTypes.color === color ? "border-gray-500" : "border-gray-200"}`}
                  key={color}
                  onClick={() =>
                    handleProductTypes({ type: "color", value: color })
                  }
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color }}
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
          <button className="flex items-center  gap-2 ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300">
            <ShoppingCart className="w-4 h-4" />
            اضافه کردن
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
