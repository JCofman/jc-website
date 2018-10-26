import styled from "styled-components";

const StyledLogo = styled.svg`
  height: 800px;
  width: 600px;
  padding: 50px;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export default StyledLogo;
