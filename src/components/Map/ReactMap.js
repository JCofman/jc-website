import React from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
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

const placesIHaveVisited = [
  {
    title: 'PT',
    id: '67ed61d8-e4a4-5acc-995a-1666ea8c2ee0',
    flag: '🇵🇹',
    name: 'Portugal',
    latitude: '39.399872',
    longitude: '-8.224454',
    markerOffsetX: 30,
    markerOffsetY: 15,
    textOffsetY: -20,
    textOffsetX: -50,
  },
  {
    title: 'ES',
    id: '757e3e37-4386-5669-83d5-c0b3afd8fa98',
    flag: '🇪🇸',
    name: 'Spain',
    latitude: '40.463667',
    longitude: '-3.74922',
    markerOffsetY: -30,
    markerOffsetX: 40,
    textOffsetY: 35,
    textOffsetX: -60,
  },
  {
    title: 'NZ',
    id: '2f9b01b0-76d7-5a55-85a1-76247d199124',
    flag: '🇳🇿',
    name: 'French',
    latitude: '46.227638',
    longitude: '2.213749',
    markerOffsetY: 15,
    markerOffsetX: 55,
    textOffsetY: -15,
    textOffsetX: -100,
  },
  {
    title: 'NZ',
    id: '2f9b01b0-76d7-5a55-85a1-76247d199124',
    flag: '🇳🇿',
    name: 'New Zealand',
    latitude: '-40.900557',
    longitude: '174.885971',
  },
  {
    title: 'AU',
    id: '66563135-b28a-559d-9005-a3b7384476e7',
    flag: '🇦🇺',
    name: 'Australia',
    latitude: '-25.274398',
    longitude: '133.775136',
  },
  {
    title: 'IS',
    id: '5bdc5fb4-43a6-5db1-930f-e4d6fcc7330a',
    flag: '🇮🇸',
    name: 'Iceland',
    latitude: '64.963051',
    longitude: '-19.020835',
    markerOffsetY: 30,
    markerOffsetX: 5,
    textOffsetY: -35,
    textOffsetX: -20,
  },
  {
    title: 'SE',
    id: '8cdeb2fc-1b08-50a1-8ffa-cd3343eee2e2',
    flag: '🇸🇪',
    name: 'Sweden',
    latitude: '60.128161',
    longitude: '18.643501',
    markerOffsetY: 40,
    markerOffsetX: 5,
    textOffsetY: -45,
    textOffsetX: -20,
  },
  {
    title: 'IL',
    id: 'a4776f79-3702-5930-baf2-2ba05c1ddfe8',
    flag: '🇮🇱',
    name: 'Israel',
    latitude: '31.046051',
    longitude: '34.851612',
  },
  {
    title: 'MD',
    id: 'd34d2a9d-178a-5fbd-9008-40b6b95a8c5e',
    flag: '🇲🇩',
    name: 'Moldova',
    latitude: '47.411631',
    longitude: '28.369885',
    markerOffsetY: '15',
    markerOffsetX: '-50',
    textOffsetY: '-20',
    textOffsetX: '40',
  },
  {
    title: 'AT',
    id: 'ca170ec9-0d1b-5292-b28b-fb77bd3dcae2',
    flag: '🇦🇹',
    name: 'Austria',
    latitude: '47.516231',
    longitude: '14.550072',
    markerOffsetY: '-25',
    markerOffsetX: '30',
    textOffsetY: '30',
    textOffsetX: '-40',
  },
  {
    title: 'CH',
    id: '086bb523-b1ce-5f36-8fb7-962594d7da42',
    flag: '🇨🇭',
    name: 'Switzerland',
    latitude: '46.818188',
    longitude: '8.227512',
    markerOffsetY: 25,
    markerOffsetX: 55,
    textOffsetY: -30,
    textOffsetX: -100,
  },
  {
    title: 'OM',
    id: '6de44e8e-0124-5e1d-9ad2-a1392d2fd189',
    flag: '🇴🇲',
    name: 'Oman',
    latitude: '21.512583',
    longitude: '55.923255',
  },
  {
    title: 'RU',
    id: '0cc6d8a1-7e17-5231-acfe-9b903139c962',
    flag: '🇷🇺',
    name: 'Russia',
    latitude: '61.52401',
    longitude: '105.318756',
  },
  {
    title: 'DE',
    id: '18f42e3b-aca1-5716-8aee-950fc780ae03',
    flag: '🇩🇪',
    name: 'Germany',
    latitude: '51.165691',
    longitude: '10.451526',
    markerOffsetY: '25',
    markerOffsetX: '-50',
    textOffsetY: '-30',
    textOffsetX: '40',
  },
  {
    title: 'CA',
    id: 'b0b22d47-05b6-5506-b3a3-284e903b15f4',
    flag: '🇨🇦',
    name: 'Canada',
    latitude: '56.130366',
    longitude: '-106.346771',
  },
  {
    title: 'NL',
    id: 'ee53e989-c3d9-5b9a-9047-528fb0e4917f',
    flag: '🇳🇱',
    name: 'Netherlands',
    latitude: '52.132633',
    longitude: '5.291266',
    markerOffsetY: 30,
    markerOffsetX: 5,
    textOffsetY: -35,
    textOffsetX: -30,
  },
  {
    title: 'HU',
    id: '78510dbe-0052-5045-87db-413ae0afb2fd',
    flag: '🇭🇺',
    name: 'Hungary',
    latitude: '47.162494',
    longitude: '19.503304',
    markerOffsetY: '25',
    markerOffsetX: '-50',
    textOffsetY: '-30',
    textOffsetX: '40',
  },
];

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
  const [opacity, cycleOpacity] = useCycle(0, 50, 100);

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
          <motion.g variants={variants} initial={'start'} animate={'end'}>
            {visitedCountries.map(
              ({ name, latitude, longitude, markerOffsetY, markerOffsetX, flag, textOffsetX, textOffsetY }) => (
                <Marker
                  key={name}
                  markerOffsetY={markerOffsetY}
                  markerOffsetX={markerOffsetX}
                  textOffsetX={textOffsetX}
                  textOffsetY={textOffsetY}
                  coordinates={[longitude, latitude]}
                  flag={flag}
                  name={name}
                ></Marker>
              )
            )}
          </motion.g>
        </AnimatePresence>
      </StyledComposableMap>
    </>
  );
};

export default ReactMap;
