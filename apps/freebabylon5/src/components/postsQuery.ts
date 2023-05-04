export default `{
  listArticles(limit:300, sort: firstPublishedDate_DESC) {
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
