import { useMemo } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { fetchAPI } from '../../lib/api-prismic'
import { getPosts } from '../../lib/queries-prismic'

import Layout from '../../components/Layout'
import LargePost from '../../components/LargePost'

import { Container, Posts } from '../../styles/pages/Posts'

interface IPosts {
  posts: IPost[]
}

const Home: React.FC<IPosts> = ({ posts }) => {
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

export const getStaticProps: GetStaticProps<IPosts> = async () => {
  const response = await fetchAPI(getPosts, {})
  const posts = response.allPosts.edges.map(post => post.node)

  return {
    props: { posts },
    revalidate: 60
  }
}

export default Home
