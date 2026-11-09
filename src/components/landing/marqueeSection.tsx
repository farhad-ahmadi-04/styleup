import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Container from "../container";
import { Sparkles, Star } from "lucide-react";

const reviews = [
  "قابل اعتماد",
  "30سال سابقه کاری",
  "ضمانت کیفیت",
  "پشتیبانی 24ساعته",
  "قابل اعتماد",
  "30سال سابقه کاری",
  "ضمانت کیفیت",
  "پشتیبانی 24ساعته",
];

const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({ text }: { text: string }) => {
  return (
    <figure className="relative h-full w-48 md:w-64 cursor-pointer overflow-hidden rounded-full lg:rounded-2xl p-4 bg-primary -mx-4.5">
      <div className="flex items-center justify-center">
        <span className="text-amber-50 font-kaghaz text-sm md:text-lg lg:text-2xl">
          {text}
        </span>
      </div>
    </figure>
  );
};

export function MarqueeSection() {
  return (
    <section className="my-10 lg:my-20">
      <Container>
        <div className="relative flex w-full flex-col items-center justify-center rounded-full overflow-hidden">
          <Marquee className="[--duration:25s]">
            {firstRow.map((text, index) => (
              <div key={index} className="flex items-center">
                <Sparkles className="text-amber-500 -mr-4  w-5 h-5 lg:w-8 lg:h-8 z-50" />
                <ReviewCard text={text} />
              </div>
            ))}
          </Marquee>

          {/* <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div> */}
          {/* <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div> */}
        </div>
      </Container>
    </section>
  );
}
