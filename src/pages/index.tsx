import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import { fetchAPI } from '../lib/api-prismic';
import { getPosts } from '../lib/queries-prismic';

import Layout from '../components/Layout';

import { Container, HighlightPost } from '../styles/pages/Home';

interface IPost {
  node: {
    _meta: { uid: string };
    title: string;
    created_at: string;
    categories: string;
    thumbnail: {
      url: string;
    };
    color: string;
    description: { text: string };
  };
}

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
        <HighlightPost>
          <div></div>
          <div className="right-side"></div>
        </HighlightPost>
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
