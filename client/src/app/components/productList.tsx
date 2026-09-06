import { ProductType } from "@/types";
import Categories from "@/app/components/categories";
import Container from "@/app/components/container";
import ProductCard from "@/app/components/productCard";

// temporary
const product: ProductType[] = [
  {
    id: 1,
    name: "تیشرت ادیداس",
    shortDescription:
      "تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید",
    description:
      "تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید",
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
    name: "تیشرت ادیداس",
    shortDescription:
      "تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید",
    description:
      "تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید",
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
    id: 3,
    name: "تیشرت ادیداس",
    shortDescription:
      "تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید",
    description:
      "تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید",
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
    id: 4,
    name: "تیشرت ادیداس",
    shortDescription:
      "تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید",
    description:
      "تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید",
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
    id: 5,
    name: "تیشرت ادیداس",
    shortDescription:
      "تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید",
    description:
      "تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید",
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
    id: 6,
    name: "تیشرت ادیداس",
    shortDescription:
      "تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید",
    description:
      "تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید",
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
    id: 7,
    name: "تیشرت ادیداس",
    shortDescription:
      "تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید",
    description:
      "تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید",
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
    id: 8,
    name: "تیشرت ادیداس",
    shortDescription:
      "تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید",
    description:
      "تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید تیشرت ادیداس اگر میخواهید مثل مسی بشید از تیشتر ادیداس استفاده کنید",
    price: 3700000,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  },
];

function ProductList() {
  return (
    <section>
      <Container>
        <Categories />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
          {product.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProductList;
