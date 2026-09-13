"use client";

import { CartItemType } from "@/types";
import Container from "../components/container";

const steps = [
  {
    id: 1,
    title: "shopping cart",
  },
  {
    id: 2,
    title: "shopping address",
  },
  {
    id: 3,
    title: "shopping method",
  },
];

const cartItems: CartItemType[] = [
  {
    id: 1,
    name: "تیشرت آدیداس CoreFit",
    shortDescription:
      "تیشرتی راحت و سبک با طراحی مدرن، مناسب استفاده روزمره و ورزشی.",
    description:
      "تیشرت آدیداس CoreFit با طراحی ساده و کاربردی، مناسب برای استفاده روزمره و فعالیت‌های ورزشی. پارچه نرم و راحت آن آزادی حرکت مناسبی فراهم می‌کند.",
    price: 3700000,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 2,
    selectedSize: "xl",
    selectedColor: "black",
  },
];

function CartPage() {
  return (
    <section>
      <Container>
        <p>سبد خرید</p>
      </Container>
    </section>
  );
}

export default CartPage;
