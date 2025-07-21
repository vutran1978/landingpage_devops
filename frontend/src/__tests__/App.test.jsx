import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders landing page title', () => {
  render(<App />);
  const heading = screen.getByText(/Về chúng tôi/i);
  expect(heading).toBeInTheDocument();
});
