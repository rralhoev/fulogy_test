import Head from 'next/head';
import { InnerLayout } from '../index';
import classes from './HeaderLayout.module.scss';

export const HeaderLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Fulogy | {title}</title>
      </Head>
      <header className={classes.header}>
        <InnerLayout>{children}</InnerLayout>
      </header>
    </>
  );
};
