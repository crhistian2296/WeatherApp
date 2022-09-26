import { render } from '@testing-library/react';
import React from 'react';
import { DataContext } from '../../components/data/DataContext';
import { WeatherSheet } from '../../components/WeatherSheet';

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
      <WeatherSheet localTime={'3600'} />
    </DataContext.Provider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
    container = render(
      <DataContext.Provider value={initialValue}>
        <WeatherSheet localTime={'3600'} />
      </DataContext.Provider>
    );
  });

  test('should match with the snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
