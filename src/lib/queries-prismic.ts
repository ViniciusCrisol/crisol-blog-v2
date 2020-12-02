export const getPosts = `{
  allPosts (sortBy: created_at_DESC) {
    edges {
      node {
        _meta {uid}
        title
        color
        description
        categories
        created_at
      }
    }
  }
}`;
