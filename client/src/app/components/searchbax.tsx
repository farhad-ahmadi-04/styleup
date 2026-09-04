import { Search } from "lucide-react";

function SearchBox() {
  return (
    <div className=" items-center py-2 px-3 shadow gap-2 hidden w-full max-w-xs rounded-md sm:flex">
      <Search width={16} />
      <input
        type="search"
        placeholder="جستجو..."
        aria-label="Search"
        className=" bg-transparent outline-none"
      />
    </div>
  );
}

export default SearchBox;
