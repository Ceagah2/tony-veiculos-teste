import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './pages/Home';

describe('App Component, Home screen', () => {
  test('Should fetch data and check if loader is on ', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const Loader = getByTestId('loader');
    expect(Loader.childElementCount).toBe(4);
  });

  test('Should render a list of cars', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const CardsContainer = getByTestId('cards-container');
    expect(CardsContainer.childElementCount).toBeGreaterThan(0);
  });
});
