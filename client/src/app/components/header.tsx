import Navmenu from "@/app/components/navbar";
import Logo from "@/app/components/logo";
import Link from "next/link";
import SearchBar from "@/app/components/searchbar";

function Header() {
  return (
    <header>
      <div className="lg:container m-auto flex items-center justify-between gap-6 border-b border-gray-200 px-4 py-4">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex min-w-0 items-center gap-4">
          {/* searchbox component */}
          <SearchBar />
          {/* nav menu */}
          <Navmenu />
          <Link
            type="button"
            href="/login"
            className="whitespace-nowrap font-medium rounded-md text-sm text-gray-600"
          >
            <button className="cursor-pointer">ورود | ثبت نام</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
