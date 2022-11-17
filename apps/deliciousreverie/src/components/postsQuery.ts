export default `{
  listPosts {
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
