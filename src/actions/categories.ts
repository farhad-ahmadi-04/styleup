import { supabase } from "@/lib/supabase/supabase";

// get categories
export async function getCategories() {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) throw new Error(error.message);
  return categories;
}
