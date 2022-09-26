import PropTypes from 'prop-types';
import React from 'react';

/**
 * Devuelve una imagen con las caracteristicas especificadas
 * @param {Number} iconId
 * @param {String} weatherMain
 * @param {String} size
 * @returns JSX Element
 */
const Icon = ({ iconId, weatherMain, size = '180px' }) => {
  return (
    <img
      loading='lazy'
      src={`https://openweathermap.org/img/wn/${iconId}@4x.png`}
      height={size}
      width={size}
      alt={`${weatherMain}`}
    />
  );
};

Icon.propTypes = {
  iconId: PropTypes.number.isRequired,
  weatherMain: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default Icon;
