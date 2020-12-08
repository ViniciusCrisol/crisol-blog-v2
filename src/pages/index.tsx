import Head from 'next/head'
import { useMemo } from 'react'
import { GetStaticProps } from 'next'

import { fetchAPI } from '../lib/api-prismic'
import { getLastPosts } from '../lib/queries-prismic'

import Layout from '../components/Layout'
import LargePost from '../components/LargePost'
import PostCard from '../components/PostCard'

import { Container, Posts } from '../styles/pages/Home'

interface IHomeProps {
  posts: IPost[]
}

const HomePage: React.FC<IHomeProps> = ({ posts }) => {
  const filteredPosts = useMemo(() => {
    return posts.filter(post => post._meta.uid !== posts[0]._meta.uid)
  }, [posts])

  return (
    <Container>
      <Head>
        <title>HomePage</title>
      </Head>

      <Layout>
        <LargePost post={posts[0]} />
        <Posts>
          {filteredPosts.map(post => (
            <PostCard key={post._meta.uid} post={post} />
          ))}
        </Posts>
      </Layout>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const response = await fetchAPI(getLastPosts, {})
  const posts = response.allPosts.edges.map(post => post.node)

  return { props: { posts }, revalidate: 60 }
}

export default HomePage
