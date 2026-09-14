"use client";

import { CartItemType } from "@/types";
import Container from "../components/container";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "سبد خرید",
  },
  {
    id: 2,
    title: "آدرس خرید",
  },
  {
    id: 3,
    title: "روش خرید",
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
    quantity: 1,
    selectedSize: "l",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "زیپ گرم پوما Ultra Warm",
    shortDescription:
      "لباسی گرم و راحت با طراحی زیپ‌دار، مناسب روزهای سرد و استفاده روزمره.",
    description:
      "زیپ پوما Ultra Warm با طراحی گرم و کاربردی، انتخابی مناسب برای روزهای سرد. طراحی زیپ‌دار و راحت آن برای استفاده روزمره و فعالیت‌های بیرون از خانه مناسب است.",
    price: 3700000,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 1,
    selectedSize: "xl",
    selectedColor: "gray",
  },
  {
    id: 3,
    name: "پولوشرت Nike Air Essentials",
    shortDescription:
      "پولوشرتی راحت و سبک با طراحی مینیمال، مناسب استفاده روزمره.",
    description:
      "پولوشرت Nike Air Essentials با طراحی مینیمال و راحت، برای استفاده روزمره و فعالیت‌های سبک انتخابی مناسب است. طراحی ساده آن به‌راحتی با استایل‌های مختلف هماهنگ می‌شود.",
    price: 3700000,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "green",
  },
  {
    id: 4,
    name: "تیشرت Nike Dri Flex",
    shortDescription:
      "تیشرتی سبک و راحت با طراحی اسپرت، مناسب استفاده روزمره و ورزشی.",
    description:
      "تیشرت Nike Dri Flex با طراحی اسپرت و سبک، برای فعالیت‌های روزمره و ورزشی مناسب است. فرم راحت آن آزادی حرکت خوبی در طول روز فراهم می‌کند.",
    price: 3700000,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: { white: "/products/4w.png", pink: "/products/4p.png" },
    quantity: 3,
    selectedSize: "m",
    selectedColor: "white",
  },
];

function CartPage() {
  const searchparams = useSearchParams();
  const routed = useRouter();

  const activeStep = parseInt(searchparams.get("step") || "1");

  return (
    <section>
      <Container>
        <div className="flex flex-col gap-8 items-center justify-center mt-12">
          {/* title */}
          <h1 className="font-kaghaz text-2xl font-medium">سبد خرید شما</h1>
          {/* steps */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {steps.map((step) => (
              <div
                className={`flex items-center gap-2 border-b-2 py-2 ${step.id === activeStep ? "border-gray-800" : "border-gray-200"}`}
                key={step.id}
              >
                <div
                  className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id === activeStep ? "bg-gray-800" : "bg-gray-400"}`}
                >
                  {step.id}
                </div>
                <span
                  className={`text-sm font-medium  ${step.id === activeStep ? "text-gray-800" : "text-gray-400"}`}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          {/* steps & details */}
          <div className="w-full flex flex-col lg:flex-row gap-16">
            {/* steps */}
            <div className="w-full lg:w-7/12 shadow-lg vorder-1 vorder-gray-100 p-8 rounded-lg flex felx-col gap-8">
              1
            </div>
            {/* d etails */}
            <div className="w-full lg:w-5/12 shadow-lg vorder-1 vorder-gray-100 p-8 rounded-lg flex flex-col gap-8">
              <h2 className="font-semibold">صورت حساب</h2>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <p className="text-gray-500">جمع خرید</p>
                  <p className="font-medium">
                    {cartItems
                      .reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0,
                      )
                      .toLocaleString("fa-IR")}{" "}
                    تومان
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500"> تخفیف (%10)</p>
                  <p className="font-medium">
                    {(
                      (cartItems.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0,
                      ) *
                        10) /
                      100
                    ).toLocaleString("fa-IR")}{" "}
                    تومان
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">هزینه ارسال</p>
                  <p className="font-medium">
                    {(100000).toLocaleString("fa-IR")} تومان
                  </p>
                </div>

                <hr className="border-gray-200" />
                <div className="flex justify-between">
                  <p className="text-gray-800 font-semibold">مجموع</p>
                  <p className="font-medium">
                    {cartItems
                      .reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0,
                      )
                      .toLocaleString("fa-IR")}{" "}
                    تومان
                  </p>
                </div>
              </div>
              {activeStep === 1 && (
                <button
                  onClick={() => routed.push("/cart?step=2", { scroll: false })}
                  className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  ادامه خرید
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CartPage;
