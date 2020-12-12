import { useCallback, useState } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { fetchAPI } from '../../lib/api-prismic'
import { getPosts } from '../../lib/queries-prismic'

import Layout from '../../components/Layout'
import LargePost from '../../components/LargePost'

import { Container, InputContainer, Posts } from '../../styles/pages/Posts'

interface IPostsPage {
  posts: IPost[]
}

const PostsPage: React.FC<IPostsPage> = ({ posts }) => {
  const Router = useRouter()
  const [category, setCategory] = useState('')

  const handleChangeValue = useCallback(event => {
    setCategory(event.target.value)
  }, [])

  const handleSubmit = useCallback(
    event => {
      event.preventDefault()
      const baseUrl = '/posts/category/[category]'
      const url = `/posts/category/${category}`
      Router.push(baseUrl, url, { shallow: true })
    },
    [category]
  )

  return (
    <Container>
      <Head>
        <title>Crisol Ponto Dev - Busque por posts.</title>
        <meta
          name="description"
          content="Aqui você encontrará artigos com os
        mais diversos temas, sendo a maior parte deles orientados a um público
        iniciante/intermediário."
        />
      </Head>

      <Layout>
        <InputContainer onSubmit={handleSubmit}>
          <input
            onChange={handleChangeValue}
            placeholder="Pesquise por temas..."
          />
          <button type="submit">Pesquisar</button>
        </InputContainer>
        <Posts>
          {posts.map(post => (
            <LargePost key={post._meta.uid} post={post} />
          ))}
        </Posts>
      </Layout>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<IPostsPage> = async () => {
  const response = await fetchAPI(getPosts, {})
  const posts = response.allPosts.edges.map(post => post.node)

  return { props: { posts }, revalidate: 60 }
}

export default PostsPage
