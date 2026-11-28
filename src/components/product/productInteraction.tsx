"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductWithVariants } from "../../types/types";
import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import useCartStore from "@/stores/cartStore";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function ProductInteraction({
  product,
  selectedColor,
  selectedSize,
}: {
  product: ProductWithVariants;
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
    <div className="mt-4 flex flex-col gap-5">
      {/* size */}
      <div className="flex flex-col gap-2">
        <Label className="text-muted-foreground">سایز</Label>
        <div className="flex items-center gap-2">
          {[...new Set(product.product_variants.map((p) => p.size))].map(
            (size) => (
              <Button
                key={size}
                type="button"
                variant={selectedSize === size ? "default" : "outline"}
                size="icon"
                aria-pressed={selectedSize === size}
                onClick={() => handleTypeChange({ type: "size", value: size })}
                className="size-7 rounded-md text-sm cursor-pointer"
              >
                {size.toUpperCase()}
              </Button>
            ),
          )}
        </div>
      </div>

      {/* color */}
      <div className="flex flex-col gap-2">
        <Label className="text-muted-foreground">رنگ</Label>
        <div className="flex items-center gap-2">
          {[...new Set(product.product_variants.map((p) => p.color))]?.map(
            (color) => (
              <Button
                key={color}
                type="button"
                variant="outline"
                size="icon"
                aria-label={`انتخاب رنگ ${color}`}
                aria-pressed={selectedColor === color}
                onClick={() =>
                  handleTypeChange({ type: "color", value: color })
                }
                className={`size-7 rounded-md p-0.5 cursor-pointer ${selectedColor === color ? "ring-1 ring-primary ring-offset-2" : ""}`}
              >
                <span
                  className="size-full rounded-sm border"
                  style={{ backgroundColor: color }}
                />
              </Button>
            ),
          )}
        </div>
      </div>

      {/* quantity */}
      <div className="flex flex-col gap-2">
        <Label className="text-muted-foreground">تعداد</Label>
        <div className="flex h-9 items-center rounded-md border bg-background w-fit">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-9 rounded-none"
            onClick={() => handleQuantityChange("decrement")}
          >
            <Plus />
            <span className="sr-only">افزایش تعداد</span>
          </Button>
          <span
            className="min-w-10 text-center text-sm font-medium"
            aria-live="polite"
          >
            {quantity}
          </span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-9 rounded-none"
            onClick={() => handleQuantityChange("increment")}
          >
            <Minus />
            <span className="sr-only">کاهش تعداد</span>
          </Button>
        </div>
      </div>

      {/* buttons */}
      <Button type="button" onClick={handleAddToCart} className="w-full">
        <Plus />
        اضافه کردن محصول
      </Button>
      <Button type="button" variant="outline" className="w-full">
        <ShoppingCart />
        خرید محصول
      </Button>
    </div>
  );
}

export default ProductInteraction;
