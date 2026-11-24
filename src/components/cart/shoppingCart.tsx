"use client";

import useCartStore from "@/stores/cartStore";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

function ShoppingCart() {
  const { cart, hasHydrated } = useCartStore();

  if (!hasHydrated) return null;
  return (
    <Link href={"/cart"} className="relative">
      <ShoppingCartIcon className="w-4 h-4  text-gray-600" />
      <span className="absolute bg-amber-400 rounded-full  w-4 h-4 text-gray-600 flex items-center justify-center -top-3 left-2 font-medium text-xs">
        {cart.reduce((acc, item) => acc + item.quantity, 0)}
      </span>
    </Link>
  );
}

export default ShoppingCart;
