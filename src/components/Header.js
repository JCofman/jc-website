import React from 'react';
import { useNetworkStatus } from 'react-adaptive-hooks/network';
import { useMemoryStatus } from 'react-adaptive-hooks/memory';

const FullHeader = React.lazy(() => import(/* webpackChunkName: "fullhome" */ './FullHeader.js'));
const LightHeader = React.lazy(() => import(/* webpackChunkName: "lighthome" */ './LightHeader.js'));

const Header = () => {
  const { effectiveConnectionType } = useNetworkStatus();
  const { deviceMemory } = useMemoryStatus();
  const isSSR = typeof window === 'undefined';

  return (
    <div>
      <>
        {!isSSR && (
          <React.Suspense fallback={<div>Loading...</div>}>
            {effectiveConnectionType === '4g' && deviceMemory >= 4 ? <FullHeader /> : <LightHeader />}
          </React.Suspense>
        )}
      </>
    </div>
  );
};

export default Header;
