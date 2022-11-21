export default `{
  listPosts(sort: publishDate_DESC) {
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
