import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FiCalendar, FiUser } from 'react-icons/fi';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Início | spacetraveling.</title>
      </Head>

      <main>
        <article className={styles.postPreview}>
          <header>
            <h2>Como utilizar Hooks</h2>
          </header>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <footer>
            <span>
              <FiCalendar size={20} /> 15 Mar 2021
            </span>
            <span>
              <FiUser size={20} /> Joseph Oliveira
            </span>
          </footer>
        </article>

        <article className={styles.postPreview}>
          <header>
            <h2>Como utilizar Hooks</h2>
          </header>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <footer>
            <span>
              <FiCalendar size={20} /> 15 Mar 2021
            </span>
            <span>
              <FiUser size={20} /> Joseph Oliveira
            </span>
          </footer>
        </article>

        <article className={styles.postPreview}>
          <header>
            <h2>Como utilizar Hooks</h2>
          </header>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <footer>
            <span>
              <FiCalendar size={20} /> 15 Mar 2021
            </span>
            <span>
              <FiUser size={20} /> Joseph Oliveira
            </span>
          </footer>
        </article>

        <article className={styles.postPreview}>
          <header>
            <h2>Como utilizar Hooks</h2>
          </header>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <footer>
            <span>
              <FiCalendar size={20} /> 15 Mar 2021
            </span>
            <span>
              <FiUser size={20} /> Joseph Oliveira
            </span>
          </footer>
        </article>

        <article className={styles.postPreview}>
          <header>
            <h2>Como utilizar Hooks</h2>
          </header>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <footer>
            <span>
              <FiCalendar size={20} /> 15 Mar 2021
            </span>
            <span>
              <FiUser size={20} /> Joseph Oliveira
            </span>
          </footer>
        </article>

        <span className={styles.loadMorePosts}>Carregar mais posts</span>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const prismic = getPrismicClient();
  // const postsResponse = await prismic.query(TODO);

  return {
    props: {},
  };
};
