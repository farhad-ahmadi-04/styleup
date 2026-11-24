import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

function SearchBar() {
  return (
    <div className="relative w-full max-w-56">
      <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        id="search"
        type="search"
        placeholder="جستجو..."
        aria-label="جستجو"
        className="ps-9"
      />
    </div>
  );
}

export default SearchBar;
