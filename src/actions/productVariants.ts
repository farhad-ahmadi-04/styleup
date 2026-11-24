import { supabase } from "@/lib/supabase/supabase";

export async function getProductsVariant() {
  let { data: product_variants, error } = await supabase.from(
    "product_variants",
  ).select(`
    color
  `);

  if (error) throw new Error(error.message);
  return product_variants;
}
