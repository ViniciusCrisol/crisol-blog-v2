export const getLastPosts = `{
  allPosts (sortBy: created_at_DESC, first: 5) {
    edges {
      node {
        _meta {uid}
        title
        description
        category
        created_at
      }
    }
  }
}`

export const getPosts = `{
  allPosts (sortBy: created_at_DESC) {
    edges {
      node {
        _meta {uid}
        title
        description
        category
        created_at
      }
    }
  }
}`

export const getPost = `
query($slug: String!, $lang: String!) {
  post(uid: $slug, lang: $lang) {
      title
      content
      created_at
      description
  }
}`

export const getPostByCategory = `
query($slug: String!) {
  allPosts(sortBy: created_at_DESC, where: {category: $slug}) {
    edges {
      node {
        _meta {uid}
        title
        description
        category
        created_at
      }
    }
  }
}
`
