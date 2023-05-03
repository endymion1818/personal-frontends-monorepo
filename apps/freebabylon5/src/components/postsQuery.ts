export default `{
  listArticles(limit:300) {
    data {
      id
      title
      slug
      description
      firstPublishedDate
      categories {
        category
        slug
      }
    }
  }
}
`
