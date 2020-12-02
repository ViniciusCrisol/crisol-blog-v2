import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import { fetchAPI } from '../lib/api-prismic';
import { getPosts } from '../lib/queries-prismic';

import Layout from '../components/Layout';
import HighlightPost from '../components/HighlightPost';

import { Container } from '../styles/pages/Home';

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
        <HighlightPost post={posts[0]} />
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
