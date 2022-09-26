import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { DataContext } from '../../../src/components/data/DataContext';
import Next48hForecast from '../../../src/components/pages/Next48hForecast';
import { mockData } from '../mockData';

jest.mock('react-redux');

describe('tests in <Next48hForecast/>', () => {
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
      <Provider store={mockData}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path='/' element={<Next48hForecast />}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    </DataContext.Provider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
    container = render(
      <DataContext.Provider value={initialValue}>
        <Provider store={mockData}>
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route path='/' element={<Next48hForecast />}></Route>
            </Routes>
          </MemoryRouter>
        </Provider>
      </DataContext.Provider>
    );
  });

  test('should match with the snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
