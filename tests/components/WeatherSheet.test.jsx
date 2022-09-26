import { render } from '@testing-library/react';
import React from 'react';
import { DataContext } from '../../src/components/data/DataContext';
import { WeatherSheet } from '../../src/components/WeatherSheet';
import { mockData } from './mockData';

describe('tests in <WeatherSheet/>', () => {
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
      <WeatherSheet
        localTime={mockData.location.weatherForecast.timezone_offset}
      />
    </DataContext.Provider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
    container = render(
      <DataContext.Provider value={initialValue}>
        <WeatherSheet
          localTime={mockData.location.weatherForecast.timezone_offset}
        />
      </DataContext.Provider>
    );
  });

  test('should match with the snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
