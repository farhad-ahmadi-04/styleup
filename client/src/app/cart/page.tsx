"use client";

import { ShippingFormInputs } from "@/app/types";
import Container from "../components/container";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Trash2 } from "lucide-react";
import ShippingForm from "../components/shippingForm";
import PaymentForm from "../components/paymentForm";
import { useState } from "react";
import Image from "next/image";
import useCartStore from "@/stores/cartStore";

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

function CartPage() {
  const searchparams = useSearchParams();
  const routed = useRouter();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();
  const { cart, removeFromCart } = useCartStore();

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
            <div className="w-full lg:w-7/12 shadow-lg vorder-1 vorder-gray-100 p-8 rounded-lg flex flex-col gap-8">
              {activeStep === 1 ? (
                cart.map((item) => (
                  <div
                    className="flex items-center justify-between"
                    key={item.id + item.selectedColor + item.selectedSize}
                  >
                    {/* image & details item */}
                    <div className="flex gap-8">
                      {/* iamge */}
                      <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                        <Image
                          src={item.images[item.selectedColor]}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {/* details */}
                      <div className="flex flex-col justify-between">
                        <div className="flexflex-col gap-1">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            تعداد: {item.quantity}
                          </p>
                          <p className="text-xs text-gray-500">
                            سایز: {item.selectedSize}
                          </p>
                          <p className="text-xs text-gray-500">
                            رنگ: {item.selectedColor}
                          </p>
                        </div>
                        <p className="font-medium">
                          {item.price.toLocaleString("fa-IR")} تومان
                        </p>
                      </div>
                    </div>
                    {/* delet button */}
                    <button
                      onClick={() => removeFromCart(item)}
                      className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))
              ) : activeStep === 2 ? (
                <ShippingForm setShippingForm={setShippingForm} />
              ) : activeStep === 3 && shippingForm ? (
                <PaymentForm />
              ) : (
                <p className="text-sm text-gray-500">
                  برای ادامه لصفا مشخصات خود را تکمیل کنید.
                </p>
              )}
            </div>

            {/* details */}
            <div className="w-full lg:w-5/12 shadow-lg vorder-1 vorder-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max sticky top-0 left-0">
              <h2 className="font-semibold">صورت حساب</h2>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <p className="text-gray-500">جمع خرید</p>
                  <p className="font-medium">
                    {cart
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
                      (cart.reduce(
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
                    {cart
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
