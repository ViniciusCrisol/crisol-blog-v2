import { useMemo } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { RichText } from 'prismic-reactjs'

import { fetchAPI } from '../../../lib/api-prismic'
import { getPostByCategory } from '../../../lib/queries-prismic'

import { Container } from '../../../styles/pages/Posts'

interface IPostPage {
  post: IPost
}

const Post: React.FC<IPostPage> = () => {
  return <h1>...</h1>
}

export const getStaticProps: GetStaticProps = async ctx => {
  console.log(ctx.params.category)
  const response = await fetchAPI(getPostByCategory, {
    slug: ctx.params.category
  })

  console.log(response)

  // const posts = response.allPosts.edges.map(post => post.node)

  return {
    props: {},
    revalidate: 60
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true }
}

export default Post
