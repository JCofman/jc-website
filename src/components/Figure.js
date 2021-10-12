import React from 'react';

const Figure = (props) => {
  const { src, alt } = props;
  return (
    <figure>
      <img src={src} alt={alt} />
      <figcaption>{alt}</figcaption>
    </figure>
  );
};

export default Figure;
