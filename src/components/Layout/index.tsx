import React from 'react';

import { Container, TabBar } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <div className="content">{children}</div>
      <TabBar>1</TabBar>
    </Container>
  );
};

export default Layout;
