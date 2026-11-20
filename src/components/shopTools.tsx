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

const perPageQuantity = [9, 12, 18, 24];

/**
 * list of tools for products card
 * @returns - jsx component
 */
function ShopTools() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [perPage, setPerPage] = useState("");

  useEffect(() => {
    const urlParams = searchParams.get("per_page");
    setPerPage(urlParams?.toString() || "18");
  }, [searchParams]);

  const handleToolsShop = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("per_page", value.toString() || "12");
    router.push(`${pathname}/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-between gap-2">
      {/* breadcrumb for show side of pages */}
      <Breadcrumb>
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

      {/* quantity of products card for page */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <span className="text-sm">نمایش: </span>
          <ul className="flex items-center ">
            {perPageQuantity.map((item, index) => (
              <div key={item} className="flex items-center">
                <li
                  className="text-sm text-gray-500"
                  onClick={() => handleToolsShop(item.toString())}
                >
                  <Button
                    variant={"link"}
                    size={"sm"}
                    className={`text-sm text-gray-500 cursor-pointer ${item.toString() === perPage && "text-gray-900"}`}
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
