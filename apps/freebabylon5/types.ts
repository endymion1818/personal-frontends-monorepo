export interface Article {
  id: string;
  title: string;
  slug: string;
  description: string;
  publishedDate: string;
  firstPublishedDate: string;
  categories: Category[] 
}

export interface Category {
  title: string
  slug: string
}