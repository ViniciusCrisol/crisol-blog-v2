import { useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RichText } from 'prismic-reactjs'
import { GetStaticPaths, GetStaticProps } from 'next'

import { fetchAPI } from '../../lib/api-prismic'
import { getPost } from '../../lib/queries-prismic'

import NothingFound from '../../components/NothingFound'

import { Container } from '../../styles/pages/Post'

interface IPostPage {
  post: IPost
}

const PostPage: React.FC<IPostPage> = ({ post }) => {
  const Router = useRouter()

  const postId = useMemo(() => {
    return Router.query.id
  }, [Router])

  if (post === undefined) return <div className="loading" />

  if (post === null) {
    return (
      <NothingFound>
        <h2>
          Não foi possível encontrar nenhum post com o id {` "${postId}"`}
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

  const formattedDate = useMemo(() => {
    const parsedDate = new Date(post.created_at)
    return new Intl.DateTimeFormat('pt-BR').format(parsedDate)
  }, [post])

  return (
    <Container>
      <div className="header">
        <span>Publicado dia: {formattedDate}</span>
      </div>
      <div className="main">{RichText.render(post.content)}</div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<IPostPage> = async ctx => {
  const response = await fetchAPI(getPost, {
    slug: ctx.params.id,
    lang: 'pt-br'
  })

  return { props: { post: response.post }, revalidate: 60 }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true }
}

export default PostPage
