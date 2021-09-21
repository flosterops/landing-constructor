import type { GetStaticPropsContext, GetStaticPropsResult, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Home: NextPage = (props) => {
    const { t } = useTranslation('common');
    return <>home</>;
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    };
};

export default Home;
