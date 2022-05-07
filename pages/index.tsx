import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticPropsContext, GetStaticPropsResult, NextPage } from 'next';

const Home: NextPage = () => {
  const {} = useTranslation('common');
  return <>home</>;
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});

export default Home;
