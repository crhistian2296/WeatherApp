import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { DataContext } from '../../../components/data/DataContext';
import Header from '../../../components/UI/Header';

describe('test in <Header/>', () => {
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
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<Header />}></Route>
        </Routes>
      </MemoryRouter>
    </DataContext.Provider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
    container = render(
      <DataContext.Provider value={initialValue}>
        <Header />
      </DataContext.Provider>
    );
  });

  test('should match with the snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
