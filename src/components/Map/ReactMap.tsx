import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import styled from 'styled-components';
import { sizes } from '../Layout/Theme';

import Marker from './Marker';
import GeoWorldMap from '../world-50m.json';
import useNotionVisitedCountries from '../../hooks/useNotionVisitedCountries';

const StyledComposableMap = styled(ComposableMap)`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  @media (min-width: ${sizes.desktop}px) {
    max-width: 1400px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

const variants = {
  start: {
    transition: { staggerChildren: 1, delayChildren: 1 },
  },
  end: {
    opacity: 1,
    transition: { staggerChildren: 1 },
  },
};

const ReactMap = () => {
  const { visitedCountries } = useNotionVisitedCountries();

  return (
    <>
      <StyledComposableMap width={980} height={551}>
        <Geographies geography={GeoWorldMap}>
          {({ geographies }) => {
            return geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    stroke: `var(--color-text)`,
                    strokeWidth: 0.5,
                    outline: `none`,
                    fill: `var(--color-background)`,
                  },
                  hover: {
                    stroke: `var(--color-text)`,
                    strokeWidth: 0.5,
                    outline: `none`,
                    fill: `var(--color-background)`,
                    fillOpacity: 0.5,
                  },
                  pressed: {
                    stroke: `var(--color-text)`,
                    strokeWidth: 0.5,
                    outline: `none`,
                    fill: `var(--color-background)`,
                  },
                }}
              />
            ));
          }}
        </Geographies>
        <AnimatePresence>
          <motion.g key="countries" variants={variants} initial={'start'} animate={'end'}>
            {visitedCountries.map(
              ({
                name,
                latitude,
                longitude,
                markerOffsetY,
                markerOffsetX,
                textOffsetX,
                textOffsetY,
              }) => {
                if (
                  markerOffsetY &&
                  markerOffsetX &&
                  latitude &&
                  longitude &&
                  textOffsetX &&
                  textOffsetY &&
                  name
                ) {
                  return (
                    <Marker
                      key={name}
                      markerOffsetY={markerOffsetY}
                      markerOffsetX={markerOffsetX}
                      textOffsetX={textOffsetX}
                      textOffsetY={textOffsetY}
                      coordinates={[parseInt(longitude), parseInt(latitude)]}
                      name={name}
                    ></Marker>
                  );
                }
                return null;
              }
            )}
          </motion.g>
        </AnimatePresence>
      </StyledComposableMap>
    </>
  );
};

export default ReactMap;
