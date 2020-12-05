import { Container } from './styles'

interface ILargePost {
  post: IPost
}

const LargePost: React.FC<ILargePost> = ({ post }) => (
  <Container color={post.color}>
    <div className="left-side">
      <h2>{post.title}</h2>
      <p>{post.description[0].text}</p>
    </div>
    <div className="right-side">
      <div className="tag">#{post._meta.uid}</div>
    </div>
  </Container>
)

export default LargePost
