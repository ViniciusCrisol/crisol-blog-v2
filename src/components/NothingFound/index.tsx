import { Container } from './styles'

import Layout from '../Layout'

const NothingFound: React.FC = ({ children }) => (
  <Layout>
    <Container>{children}</Container>
  </Layout>
)

export default NothingFound
