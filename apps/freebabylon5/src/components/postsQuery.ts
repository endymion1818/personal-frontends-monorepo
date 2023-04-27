export default `{
  listArticles {
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
