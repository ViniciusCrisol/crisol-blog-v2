import { GetStaticPaths, GetStaticProps } from 'next'
import { RichText } from 'prismic-reactjs'

import { fetchAPI } from '../../lib/api-prismic'
import { getPost } from '../../lib/queries-prismic'

import { Container } from '../../styles/pages/Post'

interface IPostPage {
  post: IPost
}

const Post: React.FC<IPostPage> = ({ post }) => {
  return <Container>{RichText.render(post.content)}</Container>
}

export const getStaticProps: GetStaticProps = async ctx => {
  const response = await fetchAPI(getPost, {
    slug: ctx.params.id,
    lang: 'pt-br'
  })

  return { props: { post: response.post }, revalidate: 60 }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true }
}

export default Post
