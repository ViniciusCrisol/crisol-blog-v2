import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { fetchAPI } from '../../../lib/api-prismic'
import { getPostByCategory } from '../../../lib/queries-prismic'

import Layout from '../../../components/Layout'
import LargePost from '../../../components/LargePost'

import { Container, Posts } from '../../../styles/pages/Posts'

interface IFilteredPostsPage {
  posts: IPost[]
}

const FilteredPostsPage: React.FC<IFilteredPostsPage> = ({ posts }) => {
  if (!posts) return <div className="loading" />

  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <Layout>
        <Posts>
          {posts.map(post => (
            <LargePost key={post._meta.uid} post={post} />
          ))}
        </Posts>
      </Layout>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<IFilteredPostsPage> = async ctx => {
  const fixedCategory = ctx.params.category.toString().trim().toLowerCase()
  const response = await fetchAPI(getPostByCategory, { slug: fixedCategory })

  const posts = response.allPosts.edges.map(post => post.node)
  return { props: { posts }, revalidate: 60 }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true }
}

export default FilteredPostsPage
