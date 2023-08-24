import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CarDetails from './index';

describe('CarDetails Component', () => {
  test('Should check if the email error is not displayed', () => {
    render(
      <MemoryRouter>
        <CarDetails />
      </MemoryRouter>,
    );
    const emailError = screen.queryByTestId('email-error');
    expect(emailError).toBeNull();
  });
  test('Should check if the data error is not displayed', () => {
    render(
      <MemoryRouter>
        <CarDetails />
      </MemoryRouter>,
    );
    const dataError = screen.queryByTestId('data-error');
    expect(dataError).toBeNull();
  });
});
