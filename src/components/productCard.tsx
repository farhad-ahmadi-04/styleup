"use client";

import { ProductWithRelations } from "@/actions/getAction";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "./ui/card";

function ProductCard({ product }: { product: ProductWithRelations }) {
  // const [productTypes, setProductTypes] = useState({
  //   size: product.variants[0]?.size,
  //   color: product.variants[0]?.color,
  // });
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

  // const handleProductTypes = ({
  //   type,
  //   value,
  // }: {
  //   type: "color" | "size";
  //   value: string;
  // }) => {
  //   setProductTypes((prev) => ({
  //     ...prev,
  //     [type]: value,
  //   }));
  // };
  const imageUrl = product.images?.[0]?.url;

  return (
    <Link href={`/shop/products/${product.id}`}>
      <Card className="relative mx-auto w-full max-w-sm pt-0 pb-4 overflow-hidden">
        {/* image */}
        <div className="relative aspect-square sm:aspect-auto sm:h-72 overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={product.name}
              width={700}
              height={700}
              className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
              بدون تصویر
            </div>
          )}
        </div>

        {/* description info */}
        <CardHeader className="text-sm">
          <CardTitle className="font-bold line-clamp-1">
            {product.name}
          </CardTitle>

          {product.discount_active ? (
            <div className="flex items-center gap-1">
              <p className="line-through text-red-300">
                {product.price.toLocaleString("fa-IR")}
              </p>
              <p className="font-semibold">
                {product.final_price.toLocaleString("fa-IR")}ت
              </p>
            </div>
          ) : (
            <p className="font-semibold">
              {product.price.toLocaleString("fa-IR")}تومان
            </p>
          )}
        </CardHeader>

        {product.discount_percent && (
          <div className="absolute flex items-center justify-center bg-amber-500/20 right-3 top-2 text-sm py-1 px-2 rounded-full text-amber-700 font-bold">
            {product.discount_percent}%
          </div>
        )}
      </Card>
    </Link>
  );
}

export default ProductCard;
