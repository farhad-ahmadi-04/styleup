import Header from "@/components/client/header";
import Footer from "@/components/client/footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-lvh flex flex-col">
      <Header />

      <div className="flex-1">{children}</div>

      <Footer />
    </div>
  );
}
