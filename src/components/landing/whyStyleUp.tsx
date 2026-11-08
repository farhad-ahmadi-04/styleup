import Image from "next/image";
import Container from "@/components/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BorderBeam } from "../ui/border-beam";

const accordionData = [
  {
    value: "help",
    summary: "استایل‌آپ چه کمکی به من می‌کند؟",
    details:
      "با پیشنهادهای کاربردی و الهام‌بخش، راحت‌تر لباس‌ها و ترکیب‌هایی را پیدا می‌کنی که با نیاز و سلیقه‌ات جور هستند.",
  },
  {
    value: "style",
    summary: "پیشنهادها چطور با سلیقه‌ی من هماهنگ می‌شوند؟",
    details:
      "می‌توانی از ایده‌ها الهام بگیری و بر اساس سبک زندگی، موقعیت و انتخاب‌های خودت، استایل مناسب‌تری بسازی.",
  },
  {
    value: "expertise",
    summary: "برای استفاده از استایل‌آپ باید متخصص مد باشم؟",
    details:
      "نه؛ استایل‌آپ برای همه طراحی شده تا بدون پیچیدگی، ایده‌های تازه پیدا کنند و با اعتمادبه‌نفس انتخاب کنند.",
  },
];

function WhyStyleUp() {
  return (
    <section className="my-10 lg:my-20">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="order-2 md:order-1">
            <div className="relative md:sticky md:top-24 h-72 sm:h-96 md:h-[30rem] overflow-hidden rounded-3xl">
              <Image
                src="/accessories-style.jpg"
                alt="الهام برای انتخاب استایل شخصی"
                fill
                className="  object-cover shadow-lg  md:animate-[float_5s_ease-in-out_infinite]"
              />
              <BorderBeam
                duration={6}
                delay={3}
                size={400}
                borderWidth={2}
                reverse
                className="from-transparent via-amber-500 to-transparent rounded-3xl"
              />
            </div>
          </div>
          <div className="order-1 space-y-5 md:order-1">
            <div>
              <p className="mb-2 text-sm font-semibold text-amber-600">
                چرا استایل‌آپ؟
              </p>
              <h2 className="font-kaghaz text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                استایل شخصی‌ات را با خیال راحت پیدا کن
              </h2>
              <p className="mt-3 leading-7 text-gray-600">
                استایل‌آپ کمک می‌کند انتخاب‌های روزمره‌ات ساده‌تر، هماهنگ‌تر و
                نزدیک‌تر به سلیقه‌ی خودت باشند.
              </p>
            </div>

            <Accordion
              type="multiple"
              defaultValue={["help"]}
              className=" rounded-2xl border border-gray-200 px-5"
            >
              {accordionData.map((item) => (
                <AccordionItem
                  className="group"
                  key={item.value}
                  value={item.value}
                >
                  <AccordionTrigger className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
                    {item.summary}
                  </AccordionTrigger>
                  <AccordionContent className="mt-3 leading-7 text-gray-600">
                    {item.details}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyStyleUp;
