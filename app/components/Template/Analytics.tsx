import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;

if (import.meta.env.PROD && GA_ID) {
  ReactGA.initialize(GA_ID);
}

const Analytics: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (import.meta.env.PROD && GA_ID) {
      ReactGA.send({ hitType: 'pageview', page: pathname });
    }
  }, [pathname]);

  return null;
};

export default Analytics;
