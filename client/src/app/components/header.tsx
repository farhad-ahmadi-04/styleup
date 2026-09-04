import SearchBox from "@/app/components/searchbax";
import Navmenu from "@/app/components/navbar";

function Header() {
  return (
    <header className="border-b bg-white">
      <div className="lg:container m-auto flex items-center justify-between gap-6 px-4 py-4">
        <div className="shrink-0 text-2xl font-bold">StyleUp</div>

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
