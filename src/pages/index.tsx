import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import { fetchAPI } from '../lib/api-prismic';
import { getPosts } from '../lib/queries-prismic';

import Layout from '../components/Layout';
import LargePost from '../components/LargePost';

import { Container, Posts, Post } from '../styles/pages/Home';

interface IPosts {
  posts: IPost[];
}

const Home: React.FC<IPosts> = ({ posts }) => {
  console.log(posts);

  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <Layout>
        <LargePost post={posts[0]} />
        <Posts>
          {posts.map(post => (
            <Post color={post.node.color}>
              <div className="top-side"></div>
              <div className="bottom-side"></div>
            </Post>
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
