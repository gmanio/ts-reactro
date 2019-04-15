import { lazy } from 'react';

const Working = lazy(() => {
  return import('./Working')
});

export default Working;
