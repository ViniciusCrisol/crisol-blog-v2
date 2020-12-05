import RightCard from './RightCard'
import { Container, TabBar } from './styles'

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <div className="content">{children}</div>
      <TabBar>
        <RightCard />
        <RightCard />
      </TabBar>
    </Container>
  )
}

export default Layout
