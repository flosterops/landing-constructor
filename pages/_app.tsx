import React, { ReactElement } from 'react';
import styled from 'styled-components';
import App, { AppProps } from 'next/app';
import { Router } from 'next/router';
import { Column } from 'ui';
import { ILayout } from 'ui/Layout';
import { GlobalStyle } from 'theme/global.theme';
import { AppContextType } from 'next/dist/shared/lib/utils';
import { appWithTranslation } from 'next-i18next';

const StyledPage = styled(Column)<ILayout>`
    height: 100%;
`;

interface IApplication extends AppProps {}

const Application = ({ Component, pageProps }: IApplication): ReactElement => (
  <>
    <GlobalStyle />
    <StyledPage>
      <Component {...pageProps} />
    </StyledPage>
  </>
);

interface InitialProps {
  pageProps: any;
}

Application.getInitialProps = async (appContext: AppContextType<Router>): Promise<InitialProps> => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(Application);
