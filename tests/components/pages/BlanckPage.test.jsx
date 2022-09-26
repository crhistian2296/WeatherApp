import { render } from '@testing-library/react';
import React from 'react';
import BlanckPage from '../../../src/components/pages/BlanckPage';

describe('tests in <BlanckPage />', () => {
  test('should match with its own snapshot', () => {
    const { container } = render(<BlanckPage />);
    expect(container).toMatchSnapshot();
  });
});
