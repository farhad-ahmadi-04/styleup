import { supabase } from "@/lib/supabase/supabase";
import { QueryData } from "@supabase/supabase-js";

const PRODUCT_SELECT = `
  id,
  name,
  short_description,
  description,
  price,
  created_at,
  category:categories ( id, name, slug ),
  images:product_images ( id, color, url ),
  variants:product_variants ( id, size, color, stock )
` as const;

const productsQuery = supabase.from("products").select(PRODUCT_SELECT);
export type ProductWithRelations = QueryData<typeof productsQuery>[number];

// get all products
export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_SELECT)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}

// get product by id
export async function getProductById(id: number) {
  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_SELECT)
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}

// get categories
export async function getCategories() {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) throw new Error(error.message);
  return categories;
}
