import React, { useEffect } from 'react';
import { AppProps } from 'next/app';

const MyApp = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
