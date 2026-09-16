import { SubmitHandler, useForm } from "react-hook-form";
import { PaymentFormInputs, paymentFormSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function PaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });
  const router = useRouter();

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {};

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      {/* cart holder div */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cartHolder"
          className="text-xs text-gray-500 font-medium"
        >
          نام روی کارت
        </label>
        <input
          type="text"
          id="cartHolder"
          placeholder="کاظم"
          {...register("cartHolder")}
          className="border-b border-gray-200 outline-none text-sm"
        />
        {errors.cartHolder && (
          <p className="text-xs text-red-500 font-medium">
            {errors.cartHolder.message}
          </p>
        )}
      </div>
      {/* cart number div */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cartNumber"
          className="text-xs text-gray-500 font-medium"
        >
          شماره کارت
        </label>
        <input
          type="number"
          id="cartNumber"
          placeholder="123456789123"
          {...register("cartNumber")}
          className="border-b border-gray-200 outline-none text-sm"
        />
        {errors.cartNumber && (
          <p className="text-xs text-red-500 font-medium">
            {errors.cartNumber.message}
          </p>
        )}
      </div>
      {/* expiration date div */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-xs text-gray-500 font-medium"
        >
          تاریخ اعتبار
        </label>
        <input
          type="text"
          id="expirationDate"
          placeholder="MM/YY"
          {...register("expirationDate")}
          className="border-b border-gray-200 outline-none text-sm"
        />
        {errors.expirationDate && (
          <p className="text-xs text-red-500 font-medium">
            {errors.expirationDate.message}
          </p>
        )}
      </div>
      {/* address div */}
      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
          شماره cvv
        </label>
        <input
          type="number"
          id="cvv"
          placeholder="123"
          {...register("cvv")}
          className="border-b border-gray-200 outline-none text-sm"
        />
        {errors.cvv && (
          <p className="text-xs text-red-500 font-medium">
            {errors.cvv.message}
          </p>
        )}
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Image
          src="/klarna.png"
          alt="klarna"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/cards.png"
          alt="cards"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/stripe.png"
          alt="stripe"
          width={50}
          height={25}
          className="rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
      >
        پرداخت
        <ShoppingCart className="w-4 h-4" />
      </button>
    </form>
  );
}

export default PaymentForm;
