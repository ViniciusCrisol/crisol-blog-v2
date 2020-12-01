import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

import Logo from '../../assets/logo.svg';

import { Container, Top, Bottom } from './styles';

const Header: React.FC = () => {
  return (
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
  );
};

export default Header;
