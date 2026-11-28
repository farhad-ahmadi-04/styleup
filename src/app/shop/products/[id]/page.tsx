import { getProductById } from "@/actions/products";
import Container from "@/components/layout/container";
import ProductInteraction from "@/components/product/productInteraction";
import Image from "next/image";

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  // todo: get product from db
  const data = await getProductById(Number((await params).id));
  return {
    title: data.name,
    description: data.description,
  };
};

async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) {
  const data = await getProductById(Number((await params).id));

  const { color, size } = await searchParams;

  const selectedColor = color || data.product_variants[0].color;
  const selectedSize = size || data.product_variants[0].size;
  const selectedImage =
    data.product_images.find((image) => image.color === selectedColor)?.url ||
    data.product_images[0].url;

  return (
    <section>
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row md:pag-12 mt-12">
          {/* image */}
          <div className="w-full lg:w-5/12 lg:h-[800px] relative aspect-[2/3]">
            <Image
              src={selectedImage}
              alt={data.name}
              fill
              className="object-center object-cover rounded-md"
            />
          </div>

          {/* details */}
          <div className="w-full lg:w-7/12 flex flex-col gap-4">
            <h1 className="text-2xl font-medium">{data.name}</h1>
            <p className="text-gray-500">{data.description}</p>
            <h2 className="text-2xl font-medium">
              {data.final_price.toLocaleString("fa-IR")}
            </h2>
            {/* interaction */}
            <ProductInteraction
              product={data}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
            />
            {/* CARD INFO */}
            <div className="flex items-center gap-2 mt-4">
              <Image
                src="/client/klarna.png"
                alt="klarna"
                width={50}
                height={25}
                className="rounded-md"
              />
              <Image
                src="/client/cards.png"
                alt="cards"
                width={50}
                height={25}
                className="rounded-md"
              />
              <Image
                src="/client/stripe.png"
                alt="stripe"
                width={50}
                height={25}
                className="rounded-md"
              />
            </div>
            <p className="text-gray-500 text-xs">
              با کلیک روی پرداخت، با{" "}
              <span className="underline hover:text-black">شرایط و ضوابط</span>{" "}
              و{" "}
              <span className="underline hover:text-black">
                سیاست حفظ حریم خصوصی
              </span>
              موافقت می‌کنید. به ما اجازه می‌دهید مبلغ کل نمایش‌داده‌شده را از
              روش پرداخت انتخابی شما دریافت کنیم. همه فروش‌ها مشمول سیاست مرجوعی
              و <span className="underline hover:text-black">بازپرداخت</span>
              ما هستند.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProductPage;
