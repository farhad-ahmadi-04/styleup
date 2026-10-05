import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  User2,
  ChevronUp,
  Plus,
  Projector,
  Shirt,
  ShoppingBasket,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import AddOrder from "./addOrder";
import AddUser from "./addUser";
import AddCategory from "./addCategory";
import AddProduct from "./addProduct";

const items = [
  {
    title: "خانه",
    url: "/",
    icon: Home,
  },
  {
    title: "صندوق ورودی",
    url: "#",
    icon: Inbox,
  },
  {
    title: "تقویم",
    url: "#",
    icon: Calendar,
  },
  {
    title: "جستجو",
    url: "#",
    icon: Search,
  },
  {
    title: "تنظیمات",
    url: "#",
    icon: Settings,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" side="right">
      {/* sidebar header */}
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image src="/logo.svg" alt="logo" width={20} height={20} />
                <span>لاما دولوپر</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator />
      <ScrollArea className="h-10/12">
        {/* sidebar content */}
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>برنامه</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    {item.title === "صندوق ورودی" && (
                      <SidebarMenuBadge>24</SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>محصولات</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/products">
                      <Shirt />
                      مشاهده همه محصولات
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Sheet>
                    <SheetTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link href="#">
                          <Plus />
                          افزودن محصول
                        </Link>
                      </SidebarMenuButton>
                    </SheetTrigger>
                    <AddProduct />
                  </Sheet>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Sheet>
                    <SheetTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link href="#">
                          <Plus />
                          افزودن دسته بندی
                        </Link>
                      </SidebarMenuButton>
                    </SheetTrigger>
                    <AddCategory />
                  </Sheet>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>کاربران</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/users">
                      <Projector />
                      مشاهده همه کاربران
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Sheet>
                    <SheetTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link href="#">
                          <Plus />
                          افزودن کاربر
                        </Link>
                      </SidebarMenuButton>
                    </SheetTrigger>
                    <AddUser />
                  </Sheet>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>سفارشات و پرداخت‌ها</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/payments">
                      <ShoppingBasket />
                      مشاهده همه پرداخت‌ها
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <Sheet>
                    <SheetTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link href="#">
                          <Plus />
                          افزودن سفارش
                        </Link>
                      </SidebarMenuButton>
                    </SheetTrigger>
                    <AddOrder />
                  </Sheet>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </ScrollArea>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> جان دو <ChevronUp className="mr-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>حساب کاربری</DropdownMenuItem>
                <DropdownMenuItem>تنظیمات</DropdownMenuItem>
                <DropdownMenuItem>خروج</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
