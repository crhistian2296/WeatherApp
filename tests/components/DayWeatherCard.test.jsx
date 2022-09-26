import { render } from '@testing-library/react';
import React from 'react';
import { DataContext } from '../../src/components/data/DataContext';
import { DayWeatherCard } from '../../src/components/DayWeatherCard';
import { mockData } from './mockData';

describe('tests in <DayWeathercard/>', () => {
  const initialValue = {
    themeToggle: {
      theme: false,
      toggleTheme: jest.fn(),
    },
    searchToggle: {
      sendedSearch: false,
      toggleSearch: jest.fn(),
    },
  };

  let { container } = render(
    <DataContext.Provider value={initialValue}>
      <DayWeatherCard
        dayValues={mockData.location.weatherForecast.daily.at(3)}
        timezone_offset={mockData.location.weatherForecast.timezone_offset}
      />
    </DataContext.Provider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
    container = render(
      <DataContext.Provider value={initialValue}>
        <DayWeatherCard
          dayValues={mockData.location.weatherForecast.daily.at(3)}
          timezone_offset={mockData.location.weatherForecast.timezone_offset}
        />
      </DataContext.Provider>
    );
  });

  test('should match with the snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
