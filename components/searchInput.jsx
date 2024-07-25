import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchInput() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(
    router.query?.q?.replace("%20", " ") || ""
  );

  let debounceTimer;

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      router.push(`?q=${value.replace(" ", "%20")}`);
    }, 300);
  };

  return (
    <input
      value={searchTerm}
      onChange={handleInputChange}
      className="flex h-8 w-52 rounded-md border border-input bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground"
      placeholder="Search..."
    />
  );
}
