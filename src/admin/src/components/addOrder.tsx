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

const formSchema = z.object({
  amount: z.number().min(1, { message: "مبلغ باید حداقل ۱ باشد!" }),
  userId: z.string().min(1, { message: "شناسه کاربر الزامی است!" }),
  status: z.enum(["در انتظار", "در حال پردازش", "موفق", "ناموفق"]),
});

const AddOrder = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle className="mb-4">سفارش جدید</SheetTitle>
        <SheetDescription asChild>
          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>مبلغ</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>مبلغ سفارش را وارد کنید.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>شناسه کاربر</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>شناسه کاربر را وارد کنید.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>وضعیت</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="وضعیت را انتخاب کنید" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="در انتظار">در انتظار</SelectItem>
                          <SelectItem value="در حال پردازش">
                            در حال پردازش
                          </SelectItem>
                          <SelectItem value="موفق">موفق</SelectItem>
                          <SelectItem value="ناموفق">ناموفق</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>وضعیت سفارش را وارد کنید.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">ثبت</Button>
            </form>
          </Form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default AddOrder;
