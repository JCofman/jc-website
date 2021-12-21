import React from 'react';
import { QueryClientProvider } from 'react-query';

import Transition from '../src/components/Transition';
import { queryClient } from './react-query-client';

export const wrapPageElement = ({ element, props }: { element: React.ReactNode; props: any }) => {
  return (
    <Transition {...props}>
      <QueryClientProvider client={queryClient}>{element} </QueryClientProvider>
    </Transition>
  );
};
