"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Container from "../../container";
import { Button } from "../../ui/button";
import Link from "next/link";
import { getDiscountProducts, ProductWithRelations } from "@/actions/getAction";
import ProductCard from "../../productCard";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { Sparkles } from "lucide-react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

function DiscountProductsSlider() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState<ProductWithRelations[]>([]);

  useEffect(() => {
    async function NewestProducts() {
      try {
        const data = await getDiscountProducts();

        setProducts(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    }

    NewestProducts();
  }, []);

  if (isLoading)
    return (
      <section className="my-10 lg:my-20">
        <Container>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="text-amber-500" />
                <h3 className="font-kaghaz text-2xl lg:text-4xl">
                  پیشنهاد <span className="text-purple-500">شگفت </span>انگیز
                </h3>
              </div>
              <Link href="/shop">
                <Button className="cursor-pointer">مشاهده همه</Button>
              </Link>
            </div>
            <p className="text-center text-sm">
              <Spinner className="size-6" />
            </p>
          </div>
        </Container>
      </section>
    );

  if (error)
    return (
      <section className="my-10 lg:my-20">
        <Container>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="text-amber-500" />
                <h3 className="font-kaghaz text-2xl lg:text-4xl">
                  پیشنهاد <span className="text-purple-500">شگفت </span>انگیز
                </h3>
              </div>
              <Link href="/shop">
                <Button className="cursor-pointer">مشاهده همه</Button>
              </Link>
            </div>
            <p>{error}</p>
          </div>
        </Container>
      </section>
    );

  return (
    <section className="my-10 lg:my-20 overflow-x-hidden">
      <Container>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="text-amber-500" />
              <h3 className="font-kaghaz text-2xl lg:text-4xl">
                پیشنهاد <span className="text-purple-500">شگفت </span>انگیز
              </h3>
            </div>
            <Link href="/shop">
              <Button className="cursor-pointer">مشاهده همه</Button>
            </Link>
          </div>
          <div className="relative flex items-center justify-between gap-2">
            <Swiper
              slidesPerView={5.5}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                "0": {
                  slidesPerView: 2,
                  spaceBetween: 8,
                  navigation: false,
                },
                "768": {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                "1280": {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="from-background z-10 pointer-events-none absolute inset-y-0 left-0 w-2/12 bg-gradient-to-r" />
            <div className="from-background to-background/5 z-10 pointer-events-none absolute inset-y-0 right-full w-2/12 bg-gradient-to-l" />{" "}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default DiscountProductsSlider;
