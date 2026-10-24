import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Container from "./container";

type HeroPanel = {
  title: string;
  subtitle: string;
  href: string;
  image: string;
  clip: string;
  align: string;
};

// ترتیب آرایه = جای فیزیکی پنل‌ها: بالا-چپ، بالا-راست، پایین-چپ، پایین-راست
const panels: HeroPanel[] = [
  {
    title: "مردانه",
    subtitle: "استایل تمیز و جذاب",
    href: "/products",
    image: "/monto-persian-model-st.jpg",
    clip: "md:[clip-path:shape(from_0_5px,arc_to_5px_0_of_5px_cw,hline_to_calc(100%_-_5px),arc_to_100%_5px_of_5px_cw,vline_to_calc(45%_-_5px),arc_to_calc(100%_-_5px)_45%_of_5px_cw,hline_to_calc(72%_+_5px),arc_to_72%_calc(45%_+_5px)_of_5px_ccw,vline_to_calc(100%_-_5px),arc_to_calc(72%_-_5px)_100%_of_5px_cw,hline_to_5px,arc_to_0_calc(100%_-_5px)_of_5px_cw,close)]",
    align: "items-start text-left",
  },
  {
    title: "زنانه",
    subtitle: "طراحی‌های راحت و روزمره",
    href: "/products",
    image:
      "/Tweets liked by kate moss archive (@katemossarchive) _ Twitter.jpg",
    clip: "md:[clip-path:shape(from_0_5px,arc_to_5px_0_of_5px_cw,hline_to_calc(100%_-_5px),arc_to_100%_5px_of_5px_cw,vline_to_calc(100%_-_5px),arc_to_calc(100%_-_5px)_100%_of_5px_cw,hline_to_calc(28%_+_5px),arc_to_28%_calc(100%_-_5px)_of_5px_cw,vline_to_calc(45%_+_5px),arc_to_calc(28%_-_5px)_45%_of_5px_ccw,hline_to_5px,arc_to_0_calc(45%_-_5px)_of_5px_cw,close)]",
    align: "items-end text-right",
  },
  {
    title: "تخفیف‌ها",
    subtitle: "تا ۵۰٪ تخفیف روی کالاهای منتخب",
    href: "/products",
    image: "/Onitsuka Tiger™ Unisex Mexico 66 Sneakers.jpg",
    clip: "md:[clip-path:shape(from_0_5px,arc_to_5px_0_of_5px_cw,hline_to_calc(72%_-_5px),arc_to_72%_5px_of_5px_cw,vline_to_calc(45%_-_5px),arc_to_calc(72%_+_5px)_45%_of_5px_ccw,hline_to_calc(100%_-_5px),arc_to_100%_calc(45%_+_5px)_of_5px_cw,vline_to_calc(100%_-_5px),arc_to_calc(100%_-_5px)_100%_of_5px_cw,hline_to_5px,arc_to_0_calc(100%_-_5px)_of_5px_cw,close)]",
    align: "items-start text-left",
  },
  {
    title: "تازه‌ها",
    subtitle: "هر هفته محصولات جدید",
    href: "/products",
    image: "/monto-persian-st003.jpg",
    clip: "md:[clip-path:shape(from_28%_5px,arc_to_calc(28%_+_5px)_0_of_5px_cw,hline_to_calc(100%_-_5px),arc_to_100%_5px_of_5px_cw,vline_to_calc(100%_-_5px),arc_to_calc(100%_-_5px)_100%_of_5px_cw,hline_to_5px,arc_to_0_calc(100%_-_5px)_of_5px_cw,vline_to_calc(45%_+_5px),arc_to_5px_45%_of_5px_cw,hline_to_calc(28%_-_5px),arc_to_28%_calc(45%_-_5px)_of_5px_ccw,close)]",
    align: "items-end text-right",
  },
];

export default function HeroSection() {
  return (
    <section className="mx-auto w-full  px-4 py-8">
      <Container>
        <h1 className="-mb-5 text-center text-4xl font-bold tracking-tight md:text-6xl">
          styleup
        </h1>

        <div className="relative">
          <div dir="ltr" className="grid grid-cols-2 gap-3 md:h-[620px]">
            {panels.map((panel) => (
              <Link
                key={panel.title}
                href={panel.href}
                className={cn(
                  "group relative min-h-[220px] overflow-hidden rounded-[5px] bg-muted md:min-h-0",
                  panel.clip,
                )}
              >
                <Image
                  src={panel.image}
                  alt={panel.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div
                  className={cn(
                    "absolute inset-0 flex flex-col justify-end gap-1 p-4 text-white md:p-8",
                    panel.align,
                  )}
                >
                  <h2 className="font-kaghaz text-lg font-semibold md:text-3xl">
                    {panel.title}
                  </h2>
                  <p className="text-xs text-white/80 md:text-base">
                    {panel.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* متن و دکمه‌های وسط (از جهت RTL صفحه پیروی می‌کنه) */}
          <div className="pointer-events-none mt-6 md:absolute md:inset-0 md:mt-0 md:flex md:items-center md:justify-center">
            <div className="pointer-events-auto flex flex-col items-center gap-3 text-center md:max-w-[190px] lg:max-w-[260px]">
              <span className="text-xs font-medium text-muted-foreground">
                فصل جدید
              </span>
              <p className="font-kaghaz text-lg font-bold leading-snug lg:text-2xl">
                استایل خودت رو پیدا کن
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                جدیدترین کلکسیون‌های پوشاک برای هر روز شما
              </p>
              <div className="flex flex-col gap-2 lg:flex-row">
                <Button asChild size="sm">
                  <Link href="/products">خرید کن</Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link href="/products">کلکسیون‌ها</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
