import { Bell, House, ShoppingCart } from "lucide-react";
import Link from "next/link";

const nav = [
  {
    name: "خانه",
    icon: <House className="w-4 h-4  text-gray-600" />,
    slug: "/",
  },
  {
    name: "اعلان‌ها",
    icon: <Bell className="w-4 h-4  text-gray-600" />,
    slug: "/notification",
  },
  {
    name: "سبد خرید",
    icon: <ShoppingCart className="w-4 h-4  text-gray-600" />,
    slug: "/shop",
  },
];

function Navmenu() {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        {nav.map((item) => (
          <li key={item.name} className="hover:text-gray-600">
            <Link href={item.slug}>{item.icon}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navmenu;
