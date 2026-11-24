"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function FilterProducts() {
  return (
    <>
      <Sheet>
        <SheetTrigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu /> مشاهده فیلترها
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">Name</Label>
              <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-username">Username</Label>
              <Input id="sheet-demo-username" defaultValue="@peduarte" />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <div className="hidden lg:flex flex-col gap-4 sticky top-36">
        <Card className="flex justify-center items-center">
          <CardHeader>فیلتر قیمت</CardHeader>
        </Card>
        <Card className="flex justify-center items-center">
          <CardHeader>فیلتر دسته بندی</CardHeader>
        </Card>
        <Card className="flex justify-center items-center">
          <CardHeader>فیلتر رنگ</CardHeader>
        </Card>
        <Card className="flex justify-center items-center">
          <CardHeader>فیلتر موجودی</CardHeader>
        </Card>
      </div>
    </>
  );
}

export default FilterProducts;
