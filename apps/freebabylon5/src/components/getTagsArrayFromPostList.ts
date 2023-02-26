interface Tags {
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
  const tagsArrayFromPostsList = data.listArticles.data.reduce((prev, { tags, ...post }) => {
    tags.forEach(tag => {
      prev.set(tag.slug, {
        title: tag.title,
        slug: tag.slug,
        posts: [...(prev.get(tag.slug)?.posts || []), post],
      })
    });
    return prev;
  }, new Map());

  const content:Tags[] = Array.from(tagsArrayFromPostsList.values())
  return content
}
export default getTagsArrayFromPostsList
