export default `{
  listPosts(limit: 200, sort: publishDate_DESC) {
    data {
      id
      title
      slug
      description
      tags {
        title
        slug
        description
      }
    }
  }
}
`
