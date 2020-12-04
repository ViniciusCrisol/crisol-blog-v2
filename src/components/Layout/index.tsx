import React from 'react';

import { Container, TabBar } from './styles';

import RightCard from './RightCard';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <div className="content">{children}</div>
      <TabBar>
        <RightCard />
        <RightCard />
      </TabBar>
    </Container>
  );
};

export default Layout;
