import { Container } from './styles'

const Layout: React.FC = ({ children }) => (
  <Container>
    <div className="content">{children}</div>
  </Container>
)

export default Layout
