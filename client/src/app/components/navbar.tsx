import { Bell, House, ShoppingCart } from "lucide-react";

const nav = [
  {
    name: "خانه",
    icon: <House width={18} />,
    slug: "/",
  },
  {
    name: "اعلان‌ها",
    icon: <Bell width={18} />,
    slug: "/notification",
  },
  {
    name: "سبد خرید",
    icon: <ShoppingCart width={18} />,
    slug: "/shop",
  },
];

function Navmenu() {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        {nav.map((item) => (
          <li key={item.name} className="hover:text-gray-600">
            <a href={item.slug}>{item.icon}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navmenu;
