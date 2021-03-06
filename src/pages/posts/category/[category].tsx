import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

import { fetchAPI } from '../../../lib/api-prismic'
import { getPostsByCategory } from '../../../lib/queries-prismic'

import Layout from '../../../components/Layout'
import LargePost from '../../../components/LargePost'
import NothingFound from '../../../components/NothingFound'

import { Container, Posts } from '../../../styles/pages/Posts'
import { useMemo } from 'react'

interface IFilteredPostsPage {
  posts: IPost[] | undefined
}

const FilteredPostsPage: React.FC<IFilteredPostsPage> = ({ posts }) => {
  const Router = useRouter()

  const category = useMemo(() => {
    return String(Router.query.category)
  }, [Router])

  if (posts === undefined) return <div className="loading" />

  if (posts.length === 0) {
    return (
      <NothingFound>
        <Head>
          <title>Crisol Ponto Dev - Nada encontrado.</title>
          <meta
            name="description"
            content="Este blog tem o objetivo de transmitir um pouco de conhecimento
        relacionado ao mundo da programação, aqui você encontrará artigos com os
        mais diversos temas, sendo a maior parte deles orientados a um público
        iniciante/intermediário."
          />
        </Head>
        <h2>
          Não foi possível encontrar nenhum post relacionado à{` "${category}"`}
        </h2>
        <span>
          Retorne à página de posts clicando{' '}
          <Link href="/posts">
            <a>aqui</a>
          </Link>
        </span>
      </NothingFound>
    )
  }

  return (
    <Container>
      <Head>
        <title>
          Crisol Ponto Dev - Categoria:{' '}
          {category[0].toUpperCase() + category.substr(1)}
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
  const response = await fetchAPI(getPostsByCategory, { slug: fixedCategory })

  const posts = response.allPosts.edges.map(post => post.node)
  return { props: { posts }, revalidate: 60 }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true }
}

export default FilteredPostsPage
