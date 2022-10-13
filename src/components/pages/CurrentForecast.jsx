import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { capitalizeText } from '../../helpers/capitalizeText';
import Icon from '../Icon';
import { WeatherSheet } from '../WeatherSheet';
import BlanckPage from './BlanckPage';

/**
 * Ruta que muestra informacion meteorologica actual
 * @returns JSX Element
 */
const CurrentForecast = () => {
  // Obtencion de informacion concerniente a localizacion y meteorologia
  const reduxState = useSelector(state => state);
  const { selectedCity, weatherForecast = {} } = reduxState.location;

  // Valida si la informacion existe para renderizar el componente
  const { current, timezone_offset: timezoneOffset } = weatherForecast;
  if (current === undefined) return <BlanckPage />;

  const timezoneOffsetCorrected = timezoneOffset - 2 * 3600;
  const {
    dt,
    temp,
    feels_like: feelsLike,
    pressure,
    humidity,
    clouds,
    uvi,
    visibility,
    wind_speed: windSpeed,
    wind_deg: windDeg,
    weather,
  } = current;

  // Manejo de tiempo en segundos en formato unix con la libreria momentJS
  const day = moment.unix(dt + timezoneOffsetCorrected);
  const localTime = day.format('dddd, kk:mm');

  return (
    <>
      <div className='display-4 mb-3'>Current Weather</div>

      <WeatherSheet localTime={`${localTime} ${selectedCity}`}>
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-sm-start my-3 my-sm-0'>
              <div>
                <Icon
                  iconId={weather.at(0).icon}
                  weatherMain={weather.at(0).main}
                />
              </div>
            </div>
            <div className='col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-sm-start my-3 my-sm-0'>
              <div>
                <p className='m-0 display-2'>{`${temp.toFixed(1)}°C`}</p>
                <p className='card-text fs-5 m-0'>{`Real feel: ${feelsLike}°C`}</p>
                <p className='card-text fs-5'>
                  {capitalizeText(`${weather.at(0).description}`)}
                </p>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-sm-start justify-content-center my-3 my-sm-0'>
              <div>
                <p className='card-text fs-5 m-0'>{`Pressure: ${pressure}hPa`}</p>
                <p className='card-text fs-5 m-0'>{`Humidity: ${humidity}%`}</p>
                <p className='card-text fs-5 m-0'>{`Clouds: ${clouds}%`}</p>
                <p className='card-text fs-5'>{`Visibility: ${visibility}m`}</p>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3 d-flex flex-column align-items-center align-items-sm-start justify-content-center my-3 my-sm-0'>
              <div>
                <p className='card-text fs-5 m-0'>{`UV: ${uvi}`}</p>
                <p className='card-text fs-5 m-0'>{`Wind speed: ${windSpeed}m/s`}</p>
                <p className='card-text fs-5'>{`Wind degrees: ${windDeg}°`}</p>
              </div>
            </div>
          </div>
        </div>
      </WeatherSheet>
    </>
  );
};

export default CurrentForecast;
