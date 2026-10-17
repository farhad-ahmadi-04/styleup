import { Bell, House } from "lucide-react";
import Link from "next/link";
import ShoppingCart from "./shoppingCart";

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
        <li className="hover:text-gray-600">
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  );
}

export default Navmenu;
