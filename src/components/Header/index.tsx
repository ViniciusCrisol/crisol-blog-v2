import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { Container, Top, Bottom } from './styles'
import Logo from '../../assets/logo.svg'

const Header: React.FC = () => (
  <Container>
    <Top>
      <div className="content">
        <Logo />
        <div className="links">
          <a>
            <AiOutlineGithub />
          </a>
          <a>
            <AiOutlineLinkedin />
          </a>
        </div>
      </div>
    </Top>
    <Bottom></Bottom>
  </Container>
)

export default Header
