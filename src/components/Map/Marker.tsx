/* eslint-disable react/display-name */
import React from 'react';
import { motion, MotionStyle, Transition } from 'framer-motion';
import { Marker as ReactSimpleMarker, Annotation, Point } from 'react-simple-maps';

const MotionMarker = motion(ReactSimpleMarker);

const circleTransition: Transition = {
  repeatDelay: 1,
  // repeat: 'Infinity',
  repeatType: 'loop',
  type: 'tween',
  ease: [0, 0.55, 0.75, 1],
};

const firstCircle: Transition = {
  duration: 3,
  delay: 0.3,
  ...circleTransition,
};

const secondCircle: Transition = {
  duration: 3,
  delay: 0.9,
  ...circleTransition,
};

const thirdCircle: Transition = {
  duration: 3,
  delay: 1.5,
  ...circleTransition,
};

const styleThinHalo: MotionStyle = {
  width: 7.5,
  height: 7.5,
  top: -3.6,
  left: -3.6,
  border: '1px solid var(--color-text)',
  overflow: 'visible',
  borderRadius: 100,
  position: 'absolute',
};

const circleVariant = {
  start: {
    scale: 0,
    opacity: 0,
  },
  end: {
    scale: 2,
    opacity: [1, 0.9, 0.5, 0.1, 0],
  },
};

const containerVariant = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

export const Marker = ({
  coordinates,
  name,
  markerOffsetY,
  markerOffsetX,
  textOffsetX,
  textOffsetY,
}: {
  coordinates: Point;
  name: string;
  markerOffsetY: number;
  markerOffsetX: number;
  textOffsetX: number;
  textOffsetY: number;
}) => {
  return (
    <motion.g key={name} variants={containerVariant}>
      <MotionMarker coordinates={coordinates}>
        <foreignObject
          height="15"
          width="15"
          style={{
            overflow: 'visible',
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          <motion.div>
            <motion.div
              style={styleThinHalo as MotionStyle}
              variants={circleVariant}
              initial={'start'}
              animate={'end'}
              transition={firstCircle}
            />
            <motion.div
              style={styleThinHalo as MotionStyle}
              variants={circleVariant}
              initial={'start'}
              animate={'end'}
              transition={secondCircle}
            />

            <motion.div
              style={styleThinHalo as MotionStyle}
              variants={circleVariant}
              initial={'start'}
              animate={'end'}
              transition={thirdCircle}
            />
          </motion.div>
        </foreignObject>
        {markerOffsetY || markerOffsetX ? (
          <Annotation
            subject={[coordinates]}
            dx={markerOffsetX}
            dy={markerOffsetY}
            connectorProps={{
              stroke: 'var(--color-text)',
              strokeWidth: 1,
              strokeLinecap: 'round',
            }}
          >
            <text
              x={textOffsetX}
              y={textOffsetY}
              fontSize={12}
              style={{ fontFamily: 'system-ui', fill: 'var(--color-text)', fontWeight: 'bold' }}
              alignmentBaseline="middle"
            >
              {name}
            </text>
          </Annotation>
        ) : (
          <text
            y={-7}
            fontSize={12}
            textAnchor="middle"
            style={{ fontFamily: 'system-ui', fill: 'var(--color-text)', fontWeight: 'bold' }}
          >
            {name}
          </text>
        )}
      </MotionMarker>
    </motion.g>
  );
};

export default Marker;
