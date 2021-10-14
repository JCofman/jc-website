import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookSquare, FaTwitter, FaGit, FaLinkedin } from 'react-icons/fa';
import './microAnimations.css';
const SocialCard = () => {
  return (
    <div className="App">
      <main>
        <div className="card">
          <div className="card-social">
            <motion.a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                rotate: 9,
                scale: 1.4,
                background: ['#5c5edd', '#FF008C'],
                transition: { type: 'spring' },
              }}
              className="social-icon-wrapper"
            >
              <FaFacebookSquare />
            </motion.a>
            <motion.a
              href="https://twitter.com/JCofman"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                rotate: -50,
                scale: 1.2,
                transition: { type: 'spring', stiffness: 900, damping: 11 },
              }}
              className="social-icon-wrapper"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="https://github.com/JCofman"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                rotate: 360,
                scale: 1.2,
                transition: { type: 'spring', stiffness: 900, damping: 20 },
              }}
              className="social-icon-wrapper"
            >
              <FaGit />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jcofman/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                transition: { type: 'spring' },
              }}
              whileTap={{
                scale: 0.9,
                transition: { type: 'spring' },
              }}
              className="social-icon-wrapper"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>
      </main>
    </div>
  );
};

// Navigation Links

// Buttons

//

const MicroAnimations = () => {
  return (
    <>
      <SocialCard></SocialCard>
    </>
  );
};

export default MicroAnimations;
