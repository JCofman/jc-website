import React from 'react';

import { StyledSocial } from './StyledSocial';

import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Social = () => {
  return (
    <StyledSocial>
      <a href="https://twitter.com/nichtthat" aria-label="Twitter">
        <FaTwitter size={24} />
      </a>
      <a href="https://www.linkedin.com/in/rodolfo-olivieri-1628a4158" aria-label="Behance">
        <FaLinkedinIn size={24} />
      </a>
      <a href="https://github.com/nicht" aria-label="Github">
        <FaGithub size={24} />
      </a>
    </StyledSocial>
  );
};

export default Social;
