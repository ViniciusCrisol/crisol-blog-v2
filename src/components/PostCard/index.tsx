import { useMemo } from 'react'
import Link from 'next/link'

import { Container } from './styles'

interface IPostCard {
  post: IPost
}

const PostCard: React.FC<IPostCard> = ({ post }: IPostCard) => {
  const formattedDate = useMemo(() => {
    const parsedDate = new Date(post.created_at)
    return new Intl.DateTimeFormat('pt-BR').format(parsedDate)
  }, [post])

  return (
    <Link href="/posts/[id]" as={`/posts/${post._meta.uid}`}>
      <Container>
        <div className="top-side">
          <h4>{post.title}</h4>
          <p>{post.description[0].text}</p>
        </div>
        <div className="bottom-side">
          <span>{formattedDate}</span>
          <span>{post.category}</span>
        </div>
      </Container>
    </Link>
  )
}

export default PostCard
