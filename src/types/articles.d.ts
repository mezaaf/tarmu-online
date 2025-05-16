interface IArticle {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author_id: string;
  category_id: number;
  status: "PUBLISHED" | "DRAFT" | "ARCHIVED"; // sesuaikan jika ada enum status lain
  created_at: string; // bisa diganti ke Date jika sudah di-convert
  updated_at: string;
  author: {
    id: string;
    username: string;
    profile_picture_url: string | null;
  };
  category: {
    id: number;
    name: string;
  };
}

export type { IArticle };
