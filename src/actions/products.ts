import { supabase } from "@/lib/supabase/supabase";
import { QueryData } from "@supabase/supabase-js";

const PRODUCT_SELECT = `
  id,
  name,
  short_description,
  description,
  price,
  new_until,
  discount_percent,
  discount_starts_at,
  discount_ends_at,
  created_at,
  category:categories ( id, name, slug ),
  images:product_images ( id, color, url ),
  variants:product_variants ( id, size, color, stock ),
  is_new,
  discount_active,
  final_price
` as const;

const productsQuery = supabase.from("products").select(PRODUCT_SELECT);
export type ProductWithRelations = QueryData<typeof productsQuery>[number];

// get all products
export type ProductFilters = {
  category?: string[];
  color?: string[];
  status?: string[];
  discount?: boolean;
  minPrice?: number;
  maxPrice?: number;
};

export async function getProducts({
  range,
  order,
  filters,
}: {
  range?: number;
  order?: { sortby: string; value: boolean };
  filters?: ProductFilters;
}) {
  try {
    let query = supabase
      .from("products")
      .select(PRODUCT_SELECT)
      .order(order?.sortby || "created_at", {
        ascending: order?.value ?? false,
      });

    if (filters?.category?.length) {
      query = query.in(
        "category_id",
        filters.category.map(Number).filter(Number.isFinite),
      );
    }
    if (filters?.status?.length) {
      const activeValues = filters.status.map((value) => value === "active");
      if (activeValues.length === 1)
        query = query.eq("is_active", activeValues[0]);
    }
    if (filters?.discount) query = query.eq("discount_active", true);
    if (filters?.minPrice !== undefined)
      query = query.gte("final_price", filters.minPrice);
    if (filters?.maxPrice !== undefined)
      query = query.lte("final_price", filters.maxPrice);

    if (filters?.color?.length) {
      const { data: matchingVariants, error: variantError } = await supabase
        .from("product_variants")
        .select("product_id")
        .in("color", filters.color);
      if (variantError) throw new Error(variantError.message);
      const productIds = [
        ...new Set(
          (matchingVariants || []).map((variant) => variant.product_id),
        ),
      ];
      query = query.in("id", productIds);
    }

    const { data, error } = await query.range(0, range || 11);

    if (error) throw new Error(error.message);
    return data;
  } catch (error) {
    throw error;
  }
}

// get product by category
export async function getProductsByCategory({
  range,
  order,
  category,
  filters,
}: {
  range?: number;
  order?: { sortby: string; value: boolean };
  category: string;
  filters?: ProductFilters;
}) {
  try {
    let query = supabase
      .from("products")
      .select(PRODUCT_SELECT)
      .order(order?.sortby || "created_at", {
        ascending: order?.value || false,
      })
      .eq("category_id", Number(category));

    if (filters?.category?.length) {
      query = query.in(
        "category_id",
        filters.category.map(Number).filter(Number.isFinite),
      );
    }
    if (filters?.status?.length) {
      const activeValues = filters.status.map((value) => value === "active");
      if (activeValues.length === 1)
        query = query.eq("is_active", activeValues[0]);
    }
    if (filters?.discount) query = query.eq("discount_active", true);
    if (filters?.minPrice !== undefined)
      query = query.gte("final_price", filters.minPrice);
    if (filters?.maxPrice !== undefined)
      query = query.lte("final_price", filters.maxPrice);

    if (filters?.color?.length) {
      const { data: matchingVariants, error: variantError } = await supabase
        .from("product_variants")
        .select("product_id")
        .in("color", filters.color);
      if (variantError) throw new Error(variantError.message);
      const productIds = [
        ...new Set(
          (matchingVariants || []).map((variant) => variant.product_id),
        ),
      ];
      query = query.in("id", productIds);
    }

    const { data, error } = await query.range(0, range || 12);

    if (error) throw new Error(error.message);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
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

// get newest products
export async function getDiscountProducts() {
  try {
    const { data: discountProducts, error } = await supabase
      .from("products")
      .select(PRODUCT_SELECT)
      .neq("discount_percent", 0);

    if (error) throw new Error(error.message);
    return discountProducts;
  } catch (error) {
    throw new Error(error as string);
  }
}

// get newest products
export async function getNewestProducts() {
  try {
    const { data: newProducts, error } = await supabase
      .from("products")
      .select(PRODUCT_SELECT)
      .eq("is_new", true)
      .order("created_at", { ascending: false });

    if (error) throw new Error(error.message);
    return newProducts;
  } catch (error) {
    throw new Error(error as string);
  }
}
