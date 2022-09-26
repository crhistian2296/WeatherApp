import { render } from '@testing-library/react';
import React from 'react';
import Icon from '../../src/components/Icon';

describe('tests in <Icon/>', () => {
  test('should match its own snapshot', () => {
    const { container } = render(
      <Icon iconId={1234} weatherMain={'heavy rain'} />
    );
    expect(container).toMatchSnapshot();
  });
});
