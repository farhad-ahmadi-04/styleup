"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

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
    <Select onValueChange={(value) => handleSortby(value)}>
      <SelectTrigger>
        <SelectValue placeholder="مرتب سازی" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem value={option.value} key={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default Sortby;
