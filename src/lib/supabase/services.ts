import supabase from "./client";

export async function retrieveData(tableName: string) {
  const { data, error } = await supabase.from(tableName).select();
  if (error) throw new Error(error.message);
  return data;
}

export async function retrieveArticlesByCategory(
  tableName: string,
  columnName: string,
  value: number
) {
  const { data, error } = await supabase
    .from(tableName)
    .select(
      `
      id,
      title,
      slug,
      content,
      excerpt,
        author_id,
      category_id,
      status,
      author:users(id, username, profile_picture_url),
      category:categories(id, name),
      created_at,
      updated_at
      `
    )
    .eq(columnName, value)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
}

export async function retrieveArticles(category: string) {
  const { data, error } = await supabase
    .from("articles")
    .select(
      `
      id, title, slug, excerpt, created_at, updated_at, author:users (username, profilePictureUrl),
category:categories (id,name)
      `
    )
    .eq("category", category)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}
