"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Sortby from "./sortby";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import FilterProducts from "./filter";
import { Separator } from "./ui/separator";

const perPageQuantity = [9, 12, 18, 24];

/**
 * list of tools for products card
 * @returns - jsx component
 */
function ShopTools() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [perPage, setPerPage] = useState("12");

  useEffect(() => {
    const urlParams = searchParams.get("per_page");
    setPerPage(urlParams?.toString() || perPage);
  }, [searchParams]);

  const handleToolsShop = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("per_page", value.toString() || "12");
    router.push(`${pathname}/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
      <div className="flex items-center justify-between py-2 lg:py-0">
        {/* breadcrumb for show side of pages */}
        <Breadcrumb className="">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">خانه</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="text-gray-900">
              <BreadcrumbLink href="/shop">فروشگاه</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="text-sm text-gray-500 lg:hidden">در حال نمایش 10 محصول</p>
      </div>

      <Separator className="lg:hidden bg-gray-400/40" />

      <div className="flex items-center justify-between gap-2 w-full lg:w-fit">
        {/* quantity of products card for page */}
        <div className="hidden lg:flex items-center gap-1">
          <span className="text-sm">نمایش: </span>
          <ul className="flex items-center ">
            {perPageQuantity.map((item, index) => (
              <div key={item} className="flex items-center">
                <li>
                  <Button
                    variant={"link"}
                    size={"sm"}
                    onClick={() => handleToolsShop(item.toString())}
                    className={`text-sm text-gray-500 cursor-pointer ${item.toString() === perPage && "disabled:text-gray-900 disabled:opacity-100"}`}
                    disabled={item.toString() === perPage}
                  >
                    {item}
                  </Button>
                </li>
                {perPageQuantity.length != index + 1 && (
                  <li className="text-sm text-gray-500">/</li>
                )}
              </div>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <FilterProducts />
        </div>

        {/* sort for products */}
        <Sortby
          options={[
            { value: "newest", label: "جدیدترین" },
            { value: "oldest", label: "قدیمی ترین" },
            { value: "asc", label: "قیمت: کمتر به بیشتر" },
            { value: "desc", label: "قیمت: بیشتر به کمتر" },
          ]}
        />
      </div>
    </div>
  );
}

export default ShopTools;
