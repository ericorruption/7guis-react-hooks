import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

test('Counter starts at 0 and increments on every button click', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  expect(screen.getByRole('textbox')).toHaveValue('0');
  await user.click(screen.getByRole('button'));
  expect(screen.getByRole('textbox')).toHaveValue('1');
  await user.click(screen.getByRole('button'));
  expect(screen.getByRole('textbox')).toHaveValue('2');
});
