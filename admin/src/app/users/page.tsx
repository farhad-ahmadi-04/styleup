import { columns, user } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<user[]> => {
  return [
    {
      id: "728ed521",
      avatar: "/users/1.png",
      status: "فعال",
      fullName: "علی رضایی",
      email: "ali@gmail.com",
    },
    {
      id: "728ed522",
      avatar: "/users/2.png",
      status: "فعال",
      fullName: "سارا محمدی",
      email: "sara@gmail.com",
    },
    {
      id: "728ed523",
      avatar: "/users/3.png",
      status: "غیر فعال",
      fullName: "رضا احمدی",
      email: "reza@gmail.com",
    },
    {
      id: "728ed524",
      avatar: "/users/4.png",
      status: "غیر فعال",
      fullName: "مریم کریمی",
      email: "maryam@gmail.com",
    },
    {
      id: "728ed525",
      avatar: "/users/5.png",
      status: "فعال",
      fullName: "حسین حسینی",
      email: "hossein@gmail.com",
    },
    {
      id: "728ed526",
      avatar: "/users/6.png",
      status: "فعال",
      fullName: "نگار موسوی",
      email: "negar@gmail.com",
    },
    {
      id: "728ed527",
      avatar: "/users/7.png",
      status: "فعال",
      fullName: "محمد اکبری",
      email: "mohammad@gmail.com",
    },
    {
      id: "728ed528",
      avatar: "/users/8.png",
      status: "فعال",
      fullName: "الهام رضوانی",
      email: "elham@gmail.com",
    },
    {
      id: "728ed529",
      avatar: "/users/9.png",
      status: "غیر فعال",
      fullName: "امیر حیدری",
      email: "amir@gmail.com",
    },
    {
      id: "728ed52a",
      avatar: "/users/10.png",
      status: "فعال",
      fullName: "نرگس نادری",
      email: "narges@gmail.com",
    },
    {
      id: "728ed52b",
      avatar: "/users/11.png",
      status: "فعال",
      fullName: "مهدی عباسی",
      email: "mehdi@gmail.com",
    },
    {
      id: "728ed52c",
      avatar: "/users/12.png",
      status: "فعال",
      fullName: "فاطمه جعفری",
      email: "fatemeh@gmail.com",
    },
    {
      id: "728ed52d",
      avatar: "/users/13.png",
      status: "غیر فعال",
      fullName: "رضا کاظمی",
      email: "reza2@gmail.com",
    },
    {
      id: "728ed52e",
      avatar: "/users/14.png",
      status: "فعال",
      fullName: "زهرا صادقی",
      email: "zahra@gmail.com",
    },
    {
      id: "728ed52f",
      avatar: "/users/15.png",
      status: "فعال",
      fullName: "احمد مرادی",
      email: "ahmad@gmail.com",
    },
    {
      id: "728ed52g",
      avatar: "/users/16.png",
      status: "غیر فعال",
      fullName: "لیلا نوروزی",
      email: "leila@gmail.com",
    },
    {
      id: "728ed52h",
      avatar: "/users/17.png",
      status: "فعال",
      fullName: "پوریا شریفی",
      email: "pouria@gmail.com",
    },
    {
      id: "728ed52i",
      avatar: "/users/18.png",
      status: "فعال",
      fullName: "سمیه رستمی",
      email: "somayeh@gmail.com",
    },
    {
      id: "728ed52j",
      avatar: "/users/19.png",
      status: "غیر فعال",
      fullName: "یاسر مرادی",
      email: "yaser@gmail.com",
    },
    {
      id: "728ed52k",
      avatar: "/users/20.png",
      status: "فعال",
      fullName: "مینا رحیمی",
      email: "mina@gmail.com",
    },
    {
      id: "728ed52l",
      avatar: "/users/21.png",
      status: "فعال",
      fullName: "سعید کریمی",
      email: "saeed@gmail.com",
    },
    {
      id: "728ed52m",
      avatar: "/users/22.png",
      status: "فعال",
      fullName: "شبنم توکلی",
      email: "shabnam@gmail.com",
    },
    {
      id: "728ed52n",
      avatar: "/users/23.png",
      status: "غیر فعال",
      fullName: "کمیل یوسفی",
      email: "kamil@gmail.com",
    },
    {
      id: "728ed52o",
      avatar: "/users/24.png",
      status: "فعال",
      fullName: "آرزو حبیبی",
      email: "arezo@gmail.com",
    },
    {
      id: "728ed52p",
      avatar: "/users/25.png",
      status: "فعال",
      fullName: "وحید ملکی",
      email: "vahid@gmail.com",
    },
    {
      id: "728ed52q",
      avatar: "/users/26.png",
      status: "فعال",
      fullName: "پریسا عزیزی",
      email: "parisa@gmail.com",
    },
    {
      id: "728ed52r",
      avatar: "/users/27.png",
      status: "فعال",
      fullName: "کیوان زمانی",
      email: "keyvan@gmail.com",
    },
    {
      id: "728ed52s",
      avatar: "/users/28.png",
      status: "غیر فعال",
      fullName: "شادی امینی",
      email: "shadi@gmail.com",
    },
    {
      id: "728ed52t",
      avatar: "/users/29.png",
      status: "فعال",
      fullName: "جواد فراهانی",
      email: "javad@gmail.com",
    },
    {
      id: "728ed52u",
      avatar: "/users/30.png",
      status: "فعال",
      fullName: "ترانه قاسمی",
      email: "taraneh@gmail.com",
    },
    {
      id: "728ed52v",
      avatar: "/users/31.png",
      status: "فعال",
      fullName: "بهنام سلطانی",
      email: "behnam@gmail.com",
    },
    {
      id: "728ed52w",
      avatar: "/users/32.png",
      status: "فعال",
      fullName: "مهسا هاشمی",
      email: "mahsa@gmail.com",
    },
    {
      id: "728ed52x",
      avatar: "/users/33.png",
      status: "غیر فعال",
      fullName: "فرهاد احمدپور",
      email: "farhad@gmail.com",
    },
    {
      id: "728ed52y",
      avatar: "/users/34.png",
      status: "فعال",
      fullName: "سپیده مرادیان",
      email: "sepideh@gmail.com",
    },
    {
      id: "728ed52z",
      avatar: "/users/35.png",
      status: "فعال",
      fullName: "نوید شمس",
      email: "navid@gmail.com",
    },
    {
      id: "728ed521f",
      avatar: "/users/36.png",
      status: "فعال",
      fullName: "هانیه کمالی",
      email: "hanieh@gmail.com",
    },
  ];
};

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">همه پرداخت‌ها</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;
