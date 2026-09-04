import SearchBox from "@/app/components/searchbax";
import Navmenu from "@/app/components/navbar";
import Logo from "@/app/components/logo";

function Header() {
  return (
    <header className="border-b border-b-amber-300 bg-white">
      <div className="lg:container m-auto flex items-center justify-between gap-6 px-4 py-4">
        <Logo />

        <div className="flex min-w-0 items-center gap-4">
          {/* searchbox component */}
          <SearchBox />
          {/* nav menu */}
          <Navmenu />
          <button
            type="button"
            className="whitespace-nowrap font-medium cursor-pointer border py-2 px-4 rounded-md text-sm"
          >
            ورود | ثبت نام
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
