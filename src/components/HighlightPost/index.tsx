import React from 'react';

import { Container } from './styles';

interface IHighlightPost {
  post: IPost;
}

const HighlightPost: React.FC<IHighlightPost> = ({ post }) => (
  <Container color={post.node.color}>
    <div className="left-side">
      <h2>{post.node.title}</h2>
      <p>{post.node.description[0].text}</p>
    </div>
    <div className="right-side">
      <div className="tag">#{post.node._meta.uid}</div>
    </div>
  </Container>
);

export default HighlightPost;
