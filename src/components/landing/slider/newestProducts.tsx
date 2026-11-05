"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Container from "../../container";
import { Button } from "../../ui/button";
import Link from "next/link";
import { getNewestProducts, ProductWithRelations } from "@/actions/getAction";
import ProductCard from "../../productCard";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Spinner } from "@/components/ui/spinner";

function NewestProductsSlider() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState<ProductWithRelations[]>([]);

  useEffect(() => {
    async function NewestProducts() {
      try {
        const data = await getNewestProducts();

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
              <h3 className="font-kaghaz text-2xl lg:text-4xl">
                پیشنهاد شگفت انگیز
              </h3>
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
              <h3 className="font-kaghaz text-2xl lg:text-4xl">
                {" "}
                پیشنهاد شگفت انگیز
              </h3>
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
    <section className="my-10 lg:my-20">
      <Container>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-kaghaz text-2xl lg:text-4xl">محصولات تازه</h3>
            <Link href="/shop">
              <Button className="cursor-pointer">مشاهده همه</Button>
            </Link>
          </div>
          <div className="flex items-center justify-between gap-2">
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
                },
                "768": {
                  slidesPerView: 3.3,
                  spaceBetween: 10,
                },
                "1280": {
                  slidesPerView: 5.5,
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
          </div>
        </div>
      </Container>
    </section>
  );
}

export default NewestProductsSlider;
