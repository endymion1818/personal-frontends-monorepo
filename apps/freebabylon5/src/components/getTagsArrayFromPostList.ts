interface Category {
  title: string
  slug: string
  description: string
  posts: Array<{
    title: string
    slug: string
    description: string
  }>
}

const getTagsArrayFromPostsList = (data) => {
  const tagsArrayFromPostsList = data.listArticles.data.reduce((prev, { categories, ...post }) => {
    categories.forEach(category => {
      prev.set(category.slug, {
        title: category.category,
        slug: category.slug,
        posts: [...(prev.get(category.slug)?.posts || []), post],
      })
    });
    return prev;
  }, new Map());

  const content:Category[] = Array.from(tagsArrayFromPostsList.values())
  return content
}
export default getTagsArrayFromPostsList
