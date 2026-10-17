import Container from "@/app/components/container";
import ProductInteraction from "@/app/components/productInteraction";
import Image from "next/image";

// TEMPORARY
const product = {
  id: 1,
  name: "تیشرت آدیداس CoreFit",
  shortDescription:
    "تیشرتی راحت و سبک با طراحی مدرن، مناسب استفاده روزمره و ورزشی.",
  description:
    "تیشرت آدیداس CoreFit با طراحی ساده و کاربردی، مناسب برای استفاده روزمره و فعالیت‌های ورزشی. پارچه نرم و راحت آن آزادی حرکت مناسبی فراهم می‌کند.",
  price: 3700000,
  sizes: ["s", "m", "l", "xl", "xxl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  // todo: get product from db
  return {
    title: product.name,
    description: product.description,
  };
};

async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) {
  const { color, size } = await searchParams;

  const selectedColor = (color ||
    product.colors[0]) as keyof typeof product.images;
  const selectedSize = (size || product.sizes[0]) as string;

  return (
    <section>
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row md:pag-12 mt-12">
          {/* image */}
          <div className="w-full lg:w-5/12 relative aspect-[2/3]">
            <Image
              src={product.images[selectedColor]}
              alt={product.name}
              fill
              className="object-contain rounded-md"
            />
          </div>

          {/* details */}
          <div className="w-full lg:w-7/12 flex flex-col gap-4">
            <h1 className="text-2xl font-medium">{product.name}</h1>
            <p className="text-gray-500">{product.description}</p>
            <h2 className="text-2xl font-medium">
              {product.price.toLocaleString("fa-IR")}
            </h2>
            {/* interaction */}
            <ProductInteraction
              product={product}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
            />
            {/* CARD INFO */}
            <div className="flex items-center gap-2 mt-4">
              <Image
                src="/klarna.png"
                alt="klarna"
                width={50}
                height={25}
                className="rounded-md"
              />
              <Image
                src="/cards.png"
                alt="cards"
                width={50}
                height={25}
                className="rounded-md"
              />
              <Image
                src="/stripe.png"
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
