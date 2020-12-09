import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

import { fetchAPI } from '../../../lib/api-prismic'
import { getPostByCategory } from '../../../lib/queries-prismic'

import Layout from '../../../components/Layout'
import LargePost from '../../../components/LargePost'

import { Container, Posts, NotFound } from '../../../styles/pages/Posts'
import { useMemo } from 'react'

interface IFilteredPostsPage {
  posts: IPost[] | undefined
}

const FilteredPostsPage: React.FC<IFilteredPostsPage> = ({ posts }) => {
  const Router = useRouter()

  const category = useMemo(() => {
    return Router.query.category
  }, [Router])

  console.log(category)

  if (posts === undefined) return <div className="loading" />

  if (posts.length === 0) {
    return (
      <Container>
        <Layout>
          <NotFound>
            <h2>
              Não foi possível encontrar nenhum post relacionado à
              {` "${category}"`}
            </h2>
            <span>
              Retorne à página de posts clicando{' '}
              <Link href="/posts">
                <a>aqui</a>
              </Link>
            </span>
          </NotFound>
        </Layout>
      </Container>
    )
  }
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
