import type { Metadata } from "next";
import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import AppSidebar from "@/components/admin/AppSidebar";
import Navbar from "@/components/admin/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "داشبورد",
  description: "داشبورد مدیریتی",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <div className="w-full mb-5">
        <Navbar />
        <div className="px-4">{children}</div>
      </div>
    </SidebarProvider>
  );
}
