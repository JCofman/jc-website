import React from 'react';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import GeoWorldMap from './world-50m.json';

const placesIHaveVisited = [
  {
    markerOffset: -30,
    name: 'North America',
    coordinates: [-58.3816, -34.6037],
  },
  { markerOffset: -30, name: 'Germany', coordinates: [10.45412, 51.45412] },
  { name: 'New Zealand', coordinates: [-40.90055, 174.885971] },
  { name: 'Oman', coordinates: [55.923255, 21.512583] },
  { name: 'Switzerland', coordinates: [8.227512, 46.818188] },

  // { markerOffset: -30, name: 'Georgetown', coordinates: [-58.1551, 6.8013] },
  // { markerOffset: -30, name: 'Asuncion', coordinates: [-57.5759, -25.2637] },
  // { markerOffset: 15, name: 'Paramaribo', coordinates: [-55.2038, 5.852] },
  // { markerOffset: 15, name: 'Montevideo', coordinates: [-56.1645, -34.9011] },
  // { markerOffset: 15, name: 'Caracas', coordinates: [-66.9036, 10.4806] },
  // { markerOffset: 15, name: 'Lima', coordinates: [-77.0428, -12.0464] },
];

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
      {placesIHaveVisited.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text textAnchor="middle" y={markerOffset} style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}>
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default ReactMap;
