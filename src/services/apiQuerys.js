import axios from 'axios';

/**
 * Llamada a openWeatherAPI que trae informacion de maximo 5 ciudades
 * @param {String} locationName
 * @returns {Array} Array
 */
export const getArrOfCoordinates = async locationName => {
  const res = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=5&appid=dc95562776b6b4eaf655bac72e985edb`.trim()
  );
  if (res.status === 200) return res;
  else throw new Error(res);
};

/**
 *Llamada a openWeatherAPI que trae toda la informacion de previsiones
 * @param {NUmber} lat
 * @param {NUmber} lon
 * @returns {Object}
 */
export const getWeatherForecast = async (lat, lon) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=dc95562776b6b4eaf655bac72e985edb`.trim()
  );

  if (res.status === 200) return res;
  else throw new Error(res);
};
