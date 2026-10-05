"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductType } from "../types";
import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import useCartStore from "@/stores/cartStore";
import { toast } from "react-toastify";

function ProductInteraction({
  product,
  selectedColor,
  selectedSize,
}: {
  product: ProductType;
  selectedColor: string;
  selectedSize: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();

  const handleTypeChange = ({
    type,
    value,
  }: {
    type: string;
    value: string;
  }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  const handleQuantityChange = (type: "decrement" | "increment") => {
    if (type === "decrement") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedColor,
      selectedSize,
    });
    toast.success("محصول با موفقیت اضافه شد");
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* size */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">سایز</span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <div
              key={size}
              className={`cursor-pointer border-1 p-[2px] ${selectedSize === size ? "border-gray-600" : "border-gray-300"}`}
              onClick={() => handleTypeChange({ type: "size", value: size })}
            >
              <div
                className={`w-6 h-6 text-center flex items-center justify-center ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* color */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">رنگ</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              key={color}
              className={`cursor-pointer border-1 p-[2px] ${selectedColor === color ? "border-gray-600" : "border-gray-300"}`}
              onClick={() => handleTypeChange({ type: "color", value: color })}
            >
              <div
                className={`w-6 h-6 text-center flex items-center justify-center`}
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* quantity */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">تعداد</span>
        <div className="flex items-center gap-2">
          <button
            className="cursor-pointer border-1 border-gray-3 p-1"
            onClick={() => handleQuantityChange("decrement")}
          >
            <Plus className="w-4 h-4" />
          </button>
          <span>{quantity}</span>
          <button
            className="cursor-pointer border-1 border-gray-3 p-1"
            onClick={() => handleQuantityChange("increment")}
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* buttons */}
      <button
        onClick={handleAddToCart}
        className="bg-gray-800 text-white px-4 p-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium"
      >
        <Plus className="w-4 h-4" />
        اضافه کردن محصول
      </button>
      <button className="ring-1 ring-gray-400 text-gray-800 px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium">
        <ShoppingCart className="w-4 h-4" />
        خرید محصول
      </button>
    </div>
  );
}

export default ProductInteraction;
