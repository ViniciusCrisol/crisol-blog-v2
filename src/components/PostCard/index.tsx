import React, { useMemo } from 'react';

import { Container } from './styles';

interface IPostCard {
  post: IPost;
}

const PostCard: React.FC<IPostCard> = ({ post }: IPostCard) => {
  const formattedDate = useMemo(() => {
    const parsedDate = new Date(post.node.created_at);
    return new Intl.DateTimeFormat('pt-BR').format(parsedDate);
  }, [post]);

  return (
    <Container color={post.node.color} key={post.node._meta.uid}>
      <div className="top-side">
        <h4>{post.node.title}</h4>
        <p>{post.node.description[0].text}</p>
      </div>
      <div className="bottom-side">
        <span>{formattedDate}</span>
        <span>{post.node.category}</span>
      </div>
    </Container>
  );
};

export default PostCard;
