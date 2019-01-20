import React from "react";
import styled from "styled-components";

const StyledDivider = styled.svg`
  display: block;
  width: 55px;
  height: 12px;
  margin: 0 auto;
`;
const Divider = () => (
  <StyledDivider>
    <g
      id="Welcome"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="Desktop-Dark-Navigation-"
        transform="translate(-483.000000, -1059.000000)"
        fill="#D8D8D8"
      >
        <g id="Blogpost" transform="translate(182.000000, 936.000000)">
          <g id="trenner" transform="translate(301.000000, 123.000000)">
            <rect
              id="Rectangle"
              fillOpacity="0.3"
              x="0"
              y="0"
              width="35"
              height="12"
            />
            <rect
              id="Rectangle"
              fillOpacity="0.1"
              x="20"
              y="0"
              width="35"
              height="12"
            />
          </g>
        </g>
      </g>
    </g>
  </StyledDivider>
);

export default Divider;
