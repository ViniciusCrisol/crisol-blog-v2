import Link from 'next/link'
import NothingFound from '../components/NothingFound'

const Page404: React.FC = () => (
  <NothingFound>
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
