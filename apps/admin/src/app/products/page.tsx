import { columns, product } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<product[]> => {
  return [
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
};

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">همه محصولات</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;
