import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { DataContext } from './data/DataContext';

/**
 * Ficha contenedor de la informacion meteorologica
 * @param {JSX Element}
 * @param {number} localtime
 * @returns JSX Element
 */
export const WeatherSheet = ({ children, localTime }) => {
  const { themeToggle } = useContext(DataContext);
  const { theme } = themeToggle;

  return (
    <>
      <div className={`card ${theme && `bg-dark bg-opacity-25 text-light`}`}>
        <div className='card-header'>
          <div className='display-6'>{`${localTime}`}</div>
        </div>
        {children}
      </div>
    </>
  );
};

WeatherSheet.propTypes = {
  children: PropTypes.node.isRequired,
  localTime: PropTypes.number.isRequired,
};
