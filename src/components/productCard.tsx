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
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

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
    <Link href={`/shop/products/${product.id}`}>
      <Card className="relative mx-auto w-full max-w-sm pt-0 pb-4 overflow-hidden">
        {/* image */}
        <div className="relative aspect-square sm:aspect-auto sm:h-72 overflow-hidden">
          <Image
            src={product.images[0].url}
            alt={product.name}
            width={700}
            height={700}
            className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
          />
        </div>

        {/* description info */}
        <CardHeader className="text-sm">
          <CardTitle className="font-bold line-clamp-1">
            {product.name}
          </CardTitle>

          <p>{product.price.toLocaleString("fa-IR")}تومان</p>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default ProductCard;
