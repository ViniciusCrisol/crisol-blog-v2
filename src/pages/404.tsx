import Link from 'next/link'
import Head from 'next/head'
import NothingFound from '../components/NothingFound'

const Page404: React.FC = () => (
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

    <h2>404 - Página não encontrada</h2>
    <span>
      Retorne à página de posts clicando{' '}
      <Link href="/posts">
        <a>aqui</a>
      </Link>
    </span>
  </NothingFound>
)

export default Page404
