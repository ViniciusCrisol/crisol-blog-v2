import React from 'react';

import { Container, Logo, Top, Bottom } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Top>
        <div className="content">
          <h2 className="logo-container">
            <Logo />
          </h2>
        </div>
      </Top>
      <Bottom></Bottom>
    </Container>
  );
};

export default Header;
