import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebook, FaBehance, FaGithub } from 'react-icons/fa';

import styled from 'styled-components';

export const StyledSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  a {
    color: var(--color-text);
    margin: 2rem;
  }
`;

const Social = () => {
  return (
    <StyledSocial>
      <motion.div
        whileHover={{
          rotate: 9,
          scale: 1.5,
          transition: { type: 'spring' },
        }}
      >
        <a href="https://twitter.com/JCofman" aria-label="Twitter">
          <FaTwitter size={24} />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          rotate: 9,
          scale: 1.4,
          transition: { type: 'spring' },
        }}
      >
        <a href="https://www.facebook.com/jac.cof" aria-label="Facebook">
          <FaFacebook size={24} />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          rotate: 9,
          scale: 1.4,
          transition: { type: 'spring' },
        }}
      >
        <a href="https://www.behance.net/jacobcofman" aria-label="Behance">
          <FaBehance size={24} />
        </a>
      </motion.div>

      <motion.div
        whileHover={{
          rotate: 9,
          scale: 1.4,
          transition: { type: 'spring' },
        }}
      >
        <a href="https://github.com/JCofman" aria-label="Github">
          <FaGithub size={24} />
        </a>
      </motion.div>
    </StyledSocial>
  );
};

export default Social;
