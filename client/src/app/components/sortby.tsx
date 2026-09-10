"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Sortby({ options }: { options: { value: string; label: string }[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSortby = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sortby", value || options[0].value);
    router.push(`${pathname}/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 my-6">
      <span> نمایش: </span>
      <select
        name="sort"
        id="sort"
        className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm"
        onChange={(e) => handleSortby(e.target.value)}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Sortby;
