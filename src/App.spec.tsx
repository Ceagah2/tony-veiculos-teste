import { render } from '@testing-library/react';
import Home from './pages/Home';

describe('App Component, Home screen', () => {
  test('Should fetch data and check the error message ', () => {
    const { getByTestId } = render(<Home />);
    const errorText = getByTestId('error-message');
    expect(errorText.childElementCount).toBe(0);
  });
});
