import Image from "next/image";
import Container from "../container";
import { Button } from "../ui/button";
import { Card, CardHeader } from "../ui/card";
import Link from "next/link";

const suggestionBoxData = [
  {
    title: "زنانه و مردانه",
    description: "استایل ست",
    subDescription: "در طرح های متنوع",
    imageUrl: "/set-style-outfit.jpg",
  },
  {
    title: "زنانه و مردانه",
    description: "کفش",
    subDescription: "نشان دهنده شخصیت شما",
    imageUrl: "/shoes-style.jpg",
  },
  {
    title: "زنانه و مردانه",
    description: "مانتو و شلوار",
    subDescription: "گلدوزی های زیبا و شیک",
    imageUrl: "/monto-persian-model-st.jpg",
  },
  {
    title: "زنانه و مردانه",
    description: "اکسسوری",
    subDescription: "زیبایی در جزئیات",
    imageUrl: "/accessories-style.jpg",
  },
];

function SuggestionBox() {
  return (
    <section className="my-10 lg:my-20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2 lg:gap-5 ">
          {suggestionBoxData.map((item, index) => (
            <Link key={index} href={"/shop"}>
              <Card className="relative px-6 group overflow-hidden">
                <Image
                  src={item.imageUrl}
                  fill
                  alt={item.description}
                  className="object-cover object-center group-hover:scale-110 transition-all duration-300"
                />
                <CardHeader className="relative z-20 h-[400px] flex flex-col justify-end gap-1 rounded-2xl border-4 border-amber-600/30 p-3 sm:p-5 md:p-6 overflow-hidden">
                  <div className="flex flex-col justify-end gap-1 translate-y-10 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm text-gray-300">{item.title}</span>
                    <span className="text-gray-200 font-semibold">
                      {item.description}
                    </span>
                    <span className="text-sm text-gray-300">
                      {item.subDescription}
                    </span>
                  </div>
                  <Button
                    variant={"ghost"}
                    className="translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                  >
                    مشاهده همه
                  </Button>
                </CardHeader>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 rounded-b-2xl bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent" />
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SuggestionBox;
