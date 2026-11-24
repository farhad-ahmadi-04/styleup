"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Menu, RotateCcw } from "lucide-react";
import { getCategories } from "@/actions/categories";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { getProductsVariant } from "@/actions/productVariants";

type Category = { id: number; name: string };

const STATUS_OPTIONS = [
  { value: "active", label: "فعال" },
  { value: "inactive", label: "غیرفعال" },
];

const FILTER_KEYS = [
  "min_price",
  "max_price",
  "category",
  "color",
  "status",
  "discount",
];

function FilterProducts() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [categories, setCategories] = useState<Category[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  const [minPrice, setMinPrice] = useState(searchParams.get("min_price") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("max_price") || "");

  //  get categories & get colors
  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        setCategories(data ?? []);
      } catch (error) {
        console.error("مشکلی در برقراری ارتباط رخ داده است:", error);
      }
    }

    async function fetchColors() {
      try {
        const data = await getProductsVariant();

        const uniqueColors = Array.from(
          new Set(
            (data ?? [])
              .map(({ color }) => color?.trim())
              .filter((color): color is string => Boolean(color)),
          ),
        );

        setColors(uniqueColors);
      } catch (error) {
        console.error("مشکلی در برقراری ارتباط رخ داده است:", error);
      }
    }

    fetchCategories();
    fetchColors();
  }, []);

  useEffect(() => {
    setMinPrice(searchParams.get("min_price") || "");
    setMaxPrice(searchParams.get("max_price") || "");
  }, [searchParams]);

  const updateParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const toggleParam = (key: string, value: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams.toString());
    const values = params.get(key)?.split(",").filter(Boolean) || [];

    const nextValues = checked
      ? [...new Set([...values, value])]
      : values.filter((item) => item !== value);

    if (nextValues.length) params.set(key, nextValues.join(","));
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // checking params from url that is it or not
  const isChecked = (key: string, value: string) =>
    searchParams.get(key)?.split(",").includes(value) || false;

  // delete every filter parameters that is in url and before that it checks that
  const clearFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    FILTER_KEYS.forEach((key) => params.delete(key));
    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  // get prevent params and then add min and max price to url params
  const applyPrice = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (minPrice) params.set("min_price", minPrice);
    else params.delete("min_price");
    if (maxPrice) params.set("max_price", maxPrice);
    else params.delete("max_price");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // if one filter is active the value of this will be true
  const hasFilters = FILTER_KEYS.some((key) => searchParams.has(key));

  const filterContent = (
    <div className="space-y-3">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">فیلتر قیمت</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label htmlFor="min-price">از</Label>
              <Input
                id="min-price"
                type="number"
                min="0"
                inputMode="numeric"
                value={minPrice}
                onChange={(event) => setMinPrice(event.target.value)}
                placeholder="حداقل"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="max-price">تا</Label>
              <Input
                id="max-price"
                type="number"
                min="0"
                inputMode="numeric"
                value={maxPrice}
                onChange={(event) => setMaxPrice(event.target.value)}
                placeholder="حداکثر"
              />
            </div>
          </div>
          <Button className="w-full" size="sm" onClick={applyPrice}>
            اعمال قیمت
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">دسته‌بندی</CardTitle>
        </CardHeader>
        <CardContent className="max-h-52 space-y-3 overflow-y-auto">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={isChecked("category", String(category.id))}
                onCheckedChange={(checked) =>
                  toggleParam("category", String(category.id), checked === true)
                }
              />
              <Label
                htmlFor={`category-${category.id}`}
                className="cursor-pointer font-normal"
              >
                {category.name}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">رنگ</CardTitle>
        </CardHeader>
        <CardContent className="max-h-52 space-y-3 overflow-y-auto">
          {colors.map((color) => (
            <div key={color} className="flex items-center gap-2">
              <Checkbox
                id={`color-${color}`}
                checked={isChecked("color", color)}
                onCheckedChange={(checked) =>
                  toggleParam("color", color, checked === true)
                }
              />
              <Label
                htmlFor={`color-${color}`}
                className="cursor-pointer font-normal"
              >
                {color}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">وضعیت محصول</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {STATUS_OPTIONS.map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <Checkbox
                id={`status-${option.value}`}
                checked={isChecked("status", option.value)}
                onCheckedChange={(checked) =>
                  toggleParam("status", option.value, checked === true)
                }
              />
              <Label
                htmlFor={`status-${option.value}`}
                className="cursor-pointer font-normal"
              >
                {option.label}
              </Label>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <Checkbox
              id="discount-filter"
              checked={searchParams.get("discount") === "true"}
              onCheckedChange={(checked) =>
                updateParam("discount", checked ? "true" : null)
              }
            />
            <Label
              htmlFor="discount-filter"
              className="cursor-pointer font-normal"
            >
              دارای تخفیف
            </Label>
          </div>
        </CardContent>
      </Card>

      {hasFilters && (
        <Button variant="outline" className="w-full" onClick={clearFilters}>
          <RotateCcw className="size-4" /> پاک کردن فیلترها
        </Button>
      )}
    </div>
  );

  return (
    <>
      <Sheet>
        <SheetTrigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu /> مشاهده فیلترها
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle>فیلتر محصولات</SheetTitle>
            <SheetDescription>
              گزینه‌های موردنظر را انتخاب کنید
            </SheetDescription>
          </SheetHeader>
          <div className="px-4 pb-4">{filterContent}</div>
          <SheetFooter>
            <SheetClose asChild>
              <Button className="w-full">نمایش محصولات</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <div className="hidden lg:flex flex-col gap-4 sticky top-36">
        {filterContent}
      </div>
    </>
  );
}

export default FilterProducts;
