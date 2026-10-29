"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Container from "../container";
import { Button } from "../ui/button";
import Link from "next/link";
import { ProductWithRelations } from "@/actions/getAction";
import ProductCard from "../productCard";

function ProductSlide({
  title,
  pageLink,
  products,
}: {
  title: string;
  pageLink: string;
  products: ProductWithRelations[];
}) {
  return (
    <section>
      <Container>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-kaghaz text-2xl lg:text-4xl">{title}</h3>
            <Link href={pageLink}>
              <Button className="cursor-pointer">همه محصولات</Button>
            </Link>
          </div>
          <div className="flex items-center justify-between gap-2">
            <Swiper slidesPerView={5.5} spaceBetween={30} className="mySwiper">
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

export default ProductSlide;
