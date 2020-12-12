import { useMemo } from 'react'
import Head from 'next/head'
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
        <title>
          Crisol Ponto Dev - Artigos relacionados ao mundo da programação.
        </title>
        <meta
          name="description"
          content="Este blog tem o objetivo de transmitir um pouco de conhecimento
        relacionado ao mundo da programação, aqui você encontrará artigos com os
        mais diversos temas, sendo a maior parte deles orientados a um público
        iniciante/intermediário."
        />
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
