import Loader from '@/components/atoms/Loader';
import Home from '@/pages/Home';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('axios');

describe('Home component', () => {
  it('should renders loading state while fetching data', () => {
    render(<Home />, { wrapper: MemoryRouter });
    render(<Loader />, { wrapper: MemoryRouter });

    expect(screen.getByTestId('loader'));
  });
});
