"use client";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

const categories = [
  "تیشرت",
  "کفش",
  "اکسسوری",
  "کیف",
  "لباس زنانه",
  "ژاکت",
  "دستکش",
] as const;

const colors = [
  { name: "blue", label: "آبی" },
  { name: "green", label: "سبز" },
  { name: "red", label: "قرمز" },
  { name: "yellow", label: "زرد" },
  { name: "purple", label: "بنفش" },
  { name: "orange", label: "نارنجی" },
  { name: "pink", label: "صورتی" },
  { name: "brown", label: "قهوه‌ای" },
  { name: "gray", label: "خاکستری" },
  { name: "black", label: "مشکی" },
  { name: "white", label: "سفید" },
] as const;

const colorNames = colors.map(({ name }) => name) as [string, ...string[]];

const sizes = [
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "xxl",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
] as const;

const formSchema = z.object({
  name: z.string().min(1, { message: "نام محصول الزامی است!" }),
  shortDescription: z
    .string()
    .min(1, { message: "توضیح کوتاه الزامی است!" })
    .max(60),
  description: z.string().min(1, { message: "توضیح الزامی است!" }),
  price: z.number().min(1, { message: "قیمت الزنامی است!" }),
  category: z.enum(categories),
  sizes: z.array(z.enum(sizes)),
  colors: z.array(z.enum(colorNames)),
  images: z.record(z.enum(colorNames), z.string()),
});

const AddProduct = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
    <SheetContent side="left" className="overflow-auto">
      {/* <ScrollArea className="h-screen"> */}
      <SheetHeader>
        <SheetTitle className="mb-4">افزودن محصول</SheetTitle>
        <SheetDescription asChild>
          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>نام</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>نام محصول را وارد کنید.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="shortDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>توضیح کوتاه</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>توضیح کوتاه را وارد کنید.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>توضیح</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormDescription>توضیح محصول را وارد کنید.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>قیمت</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormDescription>قیمت محصول را وارد کنید.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>دسته بندی</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="دسته بندی" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      دسته بندی محصول را وارد کنید.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sizes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>سایز</FormLabel>
                    <FormControl>
                      <div className="grid grid-cols-3 gap-4 my-2">
                        {sizes.map((size) => (
                          <div className="flex items-center gap-2" key={size}>
                            <Checkbox
                              id="size"
                              checked={field.value?.includes(size)}
                              onCheckedChange={(checked) => {
                                const currentValues = field.value || [];
                                if (checked) {
                                  field.onChange([...currentValues, size]);
                                } else {
                                  field.onChange(
                                    currentValues.filter((v) => v !== size),
                                  );
                                }
                              }}
                            />
                            <label htmlFor="size" className="text-xs">
                              {size}
                            </label>
                          </div>
                        ))}
                      </div>
                    </FormControl>
                    <FormDescription>
                      سایز های محصول را انتخاب کنید.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="colors"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Colors</FormLabel>
                    <FormControl>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4 my-2">
                          {colors.map((color) => (
                            <div
                              className="flex items-center gap-2"
                              key={color.name}
                            >
                              <Checkbox
                                id={`color-${color.name}`}
                                checked={field.value?.includes(color.name)}
                                onCheckedChange={(checked) => {
                                  const currentValues = field.value || [];
                                  if (checked) {
                                    field.onChange([
                                      ...currentValues,
                                      color.name,
                                    ]);
                                  } else {
                                    field.onChange(
                                      currentValues.filter(
                                        (v) => v !== color.name,
                                      ),
                                    );
                                  }
                                }}
                              />
                              <label
                                htmlFor={`color-${color.name}`}
                                className="text-xs flex items-center gap-2"
                              >
                                <div
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: color.name }}
                                />
                                {color.label}
                              </label>
                            </div>
                          ))}
                        </div>
                        {field.value && field.value.length > 0 && (
                          <div className="mt-8 space-y-4">
                            <p className="text-sm font-medium">
                              :انتخاب عکس برای رنگ انخاب شده
                            </p>
                            {field.value.map((color) => (
                              <div
                                className="flex items-center gap-2"
                                key={color}
                              >
                                <div
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: color }}
                                />
                                <span className="text-sm min-w-[60px]">
                                  {color}
                                </span>
                                <Input type="file" accept="image/*" />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormDescription>
                      رنگ های محصول را انتخاب کنید.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">ثبت</Button>
            </form>
          </Form>
        </SheetDescription>
      </SheetHeader>
      {/* </ScrollArea> */}
    </SheetContent>
  );
};

export default AddProduct;
