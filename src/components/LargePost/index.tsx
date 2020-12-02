import React from 'react';

import { Container } from './styles';

interface ILargePost {
  post: IPost;
}

const LargePost: React.FC<ILargePost> = ({ post }) => (
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

export default LargePost;
