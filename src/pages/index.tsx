import React, { useMemo } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import { fetchAPI } from '../lib/api-prismic';
import { getPosts } from '../lib/queries-prismic';

import Layout from '../components/Layout';
import LargePost from '../components/LargePost';
import PostCard from '../components/PostCard';

import { Container, Posts } from '../styles/pages/Home';

interface IPosts {
  posts: IPost[];
}

const Home: React.FC<IPosts> = ({ posts }) => {
  const filteredPosts = useMemo(() => {
    return posts.filter(
      post => post.node._meta.uid !== posts[0].node._meta.uid
    );
  }, [posts]);

  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <Layout>
        <LargePost post={posts[0]} />
        <Posts>
          {filteredPosts.map(post => (
            <PostCard key={post.node._meta.uid} post={post} />
          ))}
        </Posts>
      </Layout>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<IPosts> = async () => {
  const posts = await fetchAPI(getPosts, {});
  return {
    props: { posts: posts.allPosts.edges },
    revalidate: 60,
  };
};

export default Home;
