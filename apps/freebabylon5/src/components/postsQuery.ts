export default `{
  listArticles(limit: 200, sort: publishDate_DESC) {
    data {
      id
      title
      slug
      description
      categories {
        title
        slug
        description
      }
    }
  }
}
`
