"use client";

import { getCategories } from "@/actions/getAction";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Spinner } from "../ui/spinner";
import Container from "../container";

function Categories() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCategory() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchCategory();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;
  if (!categories) return <p>دسته بندی نیست</p>;

  return (
    <section>
      <Container>
        <Swiper
          slidesPerView={categories.length}
          spaceBetween={30}
          className="mySwiper"
          breakpoints={{
            "0": {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            "640": {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            "768": {
              slidesPerView: categories.length - 2,
              spaceBetween: 10,
            },
            "1280": {
              slidesPerView: categories.length,
              spaceBetween: 10,
            },
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Link
                href={`/shop/category/${category.slug}`}
                key={category.slug}
                className="flex flex-col items-center gap-2 py-2"
              >
                <div className="flex items-center justify-center cursor-pointer rounded-full border-blue-300  p-2 border-2 text-gray-500 transition-all duration-300 hover:text-gray-700">
                  <div className="flex items-center justify-center bg-white  rounded-full w-20 h-20 lg:w-36 lg:h-36">
                    <Image
                      src={category.image || "/logo.png"}
                      width={100}
                      height={100}
                      alt={category.name}
                      className="w-14 h-14 lg:w-24 lg:h-24"
                    />
                  </div>
                </div>
                <span className="font-kaghaz text-lg">{category.name}</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

export default Categories;
