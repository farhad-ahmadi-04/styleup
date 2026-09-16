import * as z from "zod";

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export const shippingFormSchema = z.object({
  name: z.string().min(1, "نام الزامی است!"),
  email: z.email("ایمیل نامعتبر است!").min(1, "ایمیل الزامی است!"),
  phone: z
    .string()
    .min(7, "شماره تلفن باید بین ۷ تا ۱۰ رقم باشد!")
    .max(10, "شماره تلفن باید بین ۷ تا ۱۰ رقم باشد!")
    .regex(/^\d+$/, "شماره تلفن باید فقط شامل اعداد باشد!"),
  address: z.string().min(1, "آدرس الزامی است!"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  cartHolder: z.string().min(1, "کارت الزامی است!"),
  cartNumber: z
    .string()
    .min(16, "شماره کارت الزامی است!")
    .max(16, "شماره کارت الزامی است!"),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "تاریخ انقضا باید به فرمت ماه/سال (MM/YY) باشد!",
    ),
  cvv: z.string().min(3, "cvv الزامی است").max(3, "cvv الزامی است"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;
