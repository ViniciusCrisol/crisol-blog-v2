import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import Link from 'next/link'

import Logo from '../../assets/logo.svg'
import { Container } from './styles'

const Header: React.FC = () => (
  <Container>
    <div className="content">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <div className="links">
        <a>
          <AiOutlineGithub />
        </a>
        <a>
          <AiOutlineLinkedin />
        </a>
      </div>
    </div>
  </Container>
)

export default Header
