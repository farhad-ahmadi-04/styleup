import { SubmitHandler, useForm } from "react-hook-form";
import { ShippingFormInputs, shippingFormSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function ShippingForm({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });
  const router = useRouter();

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      {/* name div */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          نام
        </label>
        <input
          type="text"
          id="name"
          placeholder="کاظم"
          {...register("name")}
          className="border-b border-gray-200 outline-none text-sm"
        />
        {errors.name && (
          <p className="text-xs text-red-500 font-medium">
            {errors.name.message}
          </p>
        )}
      </div>
      {/* email div */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500 font-medium">
          ایمیل
        </label>
        <input
          type="email"
          id="email"
          placeholder="example@gmail.com"
          {...register("email")}
          className="border-b border-gray-200 outline-none text-sm"
        />
        {errors.email && (
          <p className="text-xs text-red-500 font-medium">
            {errors.email.message}
          </p>
        )}
      </div>
      {/* phone div */}
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs text-gray-500 font-medium">
          شماره تلفن
        </label>
        <input
          type="number"
          id="phone"
          placeholder="09000000000"
          {...register("phone")}
          className="border-b border-gray-200 outline-none text-sm"
        />
        {errors.phone && (
          <p className="text-xs text-red-500 font-medium">
            {errors.phone.message}
          </p>
        )}
      </div>
      {/* address div */}
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs text-gray-500 font-medium">
          آدرس
        </label>
        <input
          type="text"
          id="address"
          placeholder="ایران - تو قلبت"
          {...register("address")}
          className="border-b border-gray-200 outline-none text-sm"
        />
        {errors.address && (
          <p className="text-xs text-red-500 font-medium">
            {errors.address.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
      >
        ادامه خرید
        <ArrowLeft className="w-4 h-4" />
      </button>
    </form>
  );
}

export default ShippingForm;
