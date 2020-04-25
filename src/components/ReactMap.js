import React from 'react';
// import theme from 'styled-theming';

import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import GeoWorldMap from './world-50m.json';

// const MapColor = theme('mode', {
//   light: props => props.theme.colors.white,
//   dark: props => props.theme.colors.black,
// });

const ReactMap = () => {
  return (
    <ComposableMap
      projectionConfig={{
        scale: 220,
        rotation: [-11, 0, 0],
      }}
      width={980}
      height={551}
      style={{
        width: `100%`,
        height: `auto`,
      }}
    >
      <Geographies geography={GeoWorldMap}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: {
                  stroke: `#F4F4F4`,
                  strokeWidth: 0.5,
                  outline: `none`,
                },
                hover: {
                  stroke: `#F4F4F4`,
                  strokeWidth: 0.5,
                  outline: `none`,
                },
                pressed: {
                  stroke: `#F4F4F4`,
                  strokeWidth: 0.5,
                  outline: `none`,
                },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default ReactMap;
