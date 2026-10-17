import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className=" items-center py-2 px-3 gap-2 hidden w-full max-w-xs rounded-md sm:flex ring-1 ring-gray-200 shadow-md">
      <Search className="w-4 h-4 text-gray-500" />
      <input
        id="search"
        type="search"
        placeholder="جستجو..."
        aria-label="Search"
        className=" bg-transparent outline-none"
      />
    </div>
  );
}

export default SearchBar;
