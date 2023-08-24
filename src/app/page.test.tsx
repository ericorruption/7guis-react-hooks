import React from 'react';
import { render } from '@testing-library/react';
import Home from '@/app/page';

test('renders learn react link', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
