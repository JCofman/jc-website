import styled from 'styled-components';
import theme from 'styled-theming';

const SocialIconColor = theme(`mode`, {
  light: props => props.theme.colors.black,
  dark: props => props.theme.colors.white,
});

const SocialIconHoverColor = theme(`mode`, {
  light: props => props.theme.colors.primary,
  dark: props => props.theme.colors.primary,
});

export const StyledSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: ${SocialIconColor};
    margin: 2rem;
  }
  svg {
    transition: all 0.5s ease;
    &:hover,
    &:focus {
      color: ${SocialIconHoverColor};
      transform: scale(1.5);
    }
  }
`;
