export const getPosts = `{
  allPosts (sortBy: created_at_DESC) {
    edges {
      node {
        _meta {
          uid
        }
        title
        description
        color
        thumbnail
        categories
        created_at
      }
    }
  }
}`;
