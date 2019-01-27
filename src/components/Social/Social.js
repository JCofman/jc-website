import React from 'react';

import { StyledSocial } from './StyledSocial';

import { FaTwitter, FaFacebook, FaBehance, FaGithub } from 'react-icons/fa';

const Social = () => {
  return (
    <StyledSocial>
      <a href="https://twitter.com/JCofman">
        <FaTwitter size={24} />
      </a>
      <a href="https://www.facebook.com/jac.cof">
        <FaFacebook size={24} />
      </a>
      <a href="https://www.behance.net/cofmanjacob2a8">
        <FaBehance size={24} />
      </a>
      <a href="https://github.com/JCofman">
        <FaGithub size={24} />
      </a>
    </StyledSocial>
  );
};

export default Social;
