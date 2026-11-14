"use client";

import { getCategories } from "@/actions/getAction";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Database } from "@/lib/supabase/database.types";
import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/logo";
import SearchBar from "@/components/searchbar";
import ShoppingCart from "@/components/shoppingCart";
import Container from "./container";

type Category = Database["public"]["Tables"]["categories"]["Row"];

const mainLinks = [
  { label: "خانه", href: "/" },
  { label: "درباره ما", href: "/#about" },
  { label: "تماس با ما", href: "/#contact" },
  { label: "فروشگاه", href: "/shop" },
];

function Header() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryError, setCategoryError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadCategories() {
      try {
        const data = await getCategories();
        if (active) setCategories(data ?? []);
      } catch (error) {
        if (active) {
          setCategoryError(
            error instanceof Error
              ? error.message
              : "خطا در دریافت دسته‌بندی‌ها",
          );
        }
      }
    }

    loadCategories();
    return () => {
      active = false;
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 shadow-sm backdrop-blur supports-[backdrop-filter]">
      <Container>
        <div className="relative flex gap-4 h-16 items-center justify-between lg:h-[5.5rem]">
          <div className="absolute start-0 flex items-center lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label="باز کردن منو"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background">
                <SheetHeader className="pt-8">
                  <SheetTitle>
                    <Logo className="block" />
                  </SheetTitle>
                </SheetHeader>
                <nav aria-label="منوی اصلی موبایل" className="px-4">
                  <ul className="flex flex-col gap-1">
                    {mainLinks.map((item) => (
                      <li key={item.href}>
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className="block rounded-md px-3 py-2.5 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground "
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                  {categories.length > 0 && (
                    <div className="mt-5 border-t border-border pt-4">
                      <p className="mb-2 px-3 text-sm font-medium text-muted-foreground">
                        دسته‌بندی‌ها
                      </p>
                      <ul className="flex flex-col gap-1">
                        {categories.map((category) => (
                          <li key={category.id}>
                            <SheetClose asChild>
                              <Link
                                href={`/shop/category/${category.slug}`}
                                className="block rounded-md px-3 py-2.5 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                {category.name}
                              </Link>
                            </SheetClose>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {categoryError && (
                    <p
                      role="alert"
                      className="mt-4 px-3 text-sm text-destructive"
                    >
                      {categoryError}
                    </p>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <Link
            href="/"
            aria-label="صفحه اصلی استایل آپ"
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            <Logo className="block text-xl md:text-2xl" />
          </Link>

          <nav
            aria-label="منوی اصلی"
            className="hidden items-center gap-5 lg:flex"
          >
            {mainLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 lg:flex xl:gap-5">
            <SearchBar />
            <Link
              href="tel:077-666666666"
              dir="ltr"
              className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="تماس با پشتیبانی: 077-666666666"
            >
              <Phone className="size-4" />
              <span>077-666666666</span>
            </Link>
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/login">ورود | ثبت‌نام</Link>
            </Button>
            <ShoppingCart />
          </div>

          <div className="absolute end-0 flex items-center lg:hidden">
            <ShoppingCart />
          </div>
        </div>

        <nav
          aria-label="دسته‌بندی محصولات"
          className="hidden min-h-11 items-center gap-6 overflow-x-auto border-t border-border whitespace-nowrap lg:flex"
        >
          {categoryError ? (
            <p role="alert" className="py-2 text-sm text-destructive">
              {categoryError}
            </p>
          ) : (
            categories.map((category) => (
              <Link
                key={category.id}
                href={`/shop/category/${category.slug}`}
                className="shrink-0 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {category.name}
              </Link>
            ))
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
