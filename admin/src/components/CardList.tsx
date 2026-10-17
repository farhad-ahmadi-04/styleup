import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

const popularProducts = [
  {
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
  },
  {
    id: 2,
    name: "زیپ گرم پوما Ultra Warm",
    shortDescription:
      "لباسی گرم و راحت با طراحی زیپ‌دار، مناسب روزهای سرد و استفاده روزمره.",
    description:
      "زیپ پوما Ultra Warm با طراحی گرم و کاربردی، انتخابی مناسب برای روزهای سرد. طراحی زیپ‌دار و راحت آن برای استفاده روزمره و فعالیت‌های بیرون از خانه مناسب است.",
    price: 3700000,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
  },
  {
    id: 3,
    name: "پولوشرت Nike Air Essentials",
    shortDescription:
      "پولوشرتی راحت و سبک با طراحی مینیمال، مناسب استفاده روزمره.",
    description:
      "پولوشرت Nike Air Essentials با طراحی مینیمال و راحت، برای استفاده روزمره و فعالیت‌های سبک انتخابی مناسب است. طراحی ساده آن به‌راحتی با استایل‌های مختلف هماهنگ می‌شود.",
    price: 3700000,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
  },
  {
    id: 4,
    name: "تیشرت Nike Dri Flex",
    shortDescription:
      "تیشرتی سبک و راحت با طراحی اسپرت، مناسب استفاده روزمره و ورزشی.",
    description:
      "تیشرت Nike Dri Flex با طراحی اسپرت و سبک، برای فعالیت‌های روزمره و ورزشی مناسب است. فرم راحت آن آزادی حرکت خوبی در طول روز فراهم می‌کند.",
    price: 3700000,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: { white: "/products/4w.png", pink: "/products/4p.png" },
  },
  {
    id: 5,
    name: "ژاکت Under Armour StormFleece",
    shortDescription: "ژاکتی گرم و راحت با طراحی اسپرت، مناسب روزهای سرد.",
    description:
      "ژاکت Under Armour StormFleece با طراحی گرم و اسپرت، گزینه‌ای مناسب برای روزهای سرد است. ظاهر مدرن و فرم راحت آن برای استفاده روزمره و فعالیت‌های بیرونی مناسب است.",
    price: 3700000,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/products/5r.png",
      orange: "/products/5o.png",
      black: "/products/5bl.png",
    },
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "تمدید اشتراک",
    badge: "جان دو",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "پرداخت خدمات",
    badge: "جین اسمیت",
    image:
      "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 3,
    title: "تمدید اشتراک",
    badge: "مایکل جانسون",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 4,
    title: "پرداخت خدمات",
    badge: "لیلی آدامز",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 5,
    title: "تمدید اشتراک",
    badge: "سم براون",
    image:
      "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
];

const CardList = ({ title }: { title: string }) => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {title === "محبوب ترین محصولات"
          ? popularProducts.map((item) => (
              <Card
                key={item.id}
                className="flex-row items-center justify-between gap-4 p-4"
              >
                <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                  <Image
                    src={Object.values(item.images)[0] || ""}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-sm font-medium">
                    {item.name}
                  </CardTitle>
                  <CardDescription>
                    {item.price.toLocaleString("fa-IR")} تومان
                  </CardDescription>
                </CardContent>
              </Card>
            ))
          : latestTransactions.map((item) => (
              <Card
                key={item.id}
                className="flex-row items-center justify-between gap-4 p-4"
              >
                <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-sm font-medium">
                    {item.title}
                  </CardTitle>
                  <Badge variant={"secondary"}>{item.badge}</Badge>
                </CardContent>
                <CardFooter className="p-0">
                  {(item.count / 100).toLocaleString("fa-IR")} تومان
                </CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default CardList;
