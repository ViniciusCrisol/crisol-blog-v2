import Layout from '../components/Layout'

import { Container } from '../styles/pages/Contact'

const linkedinLink = 'https://linkedin.com/in/viníciuscrisol'

const Contact: React.FC = () => (
  <Layout>
    <Container>
      <h2>Sobre nós:</h2>
      <p>
        Este blog tem o objetivo de transmitir um pouco de conhecimento
        relacionado ao mundo da programação, aqui você encontrará artigos com os
        mais diversos temas, sendo a maior parte deles orientados a um público
        iniciante/intermediário. Para entrar em contato acesse meu{' '}
        <a target="_blank" rel="noreferrer" href={linkedinLink}>
          linkedin
        </a>{' '}
        ou envie um e-mail para vinicius.crisol@hotmail.com.
      </p>
    </Container>
  </Layout>
)

export default Contact
