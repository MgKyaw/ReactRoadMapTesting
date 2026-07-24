import * as React from 'react';
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

// Jest
// jest.mock('axios');
// Vitest
vi.mock('axios');

describe('App', () => {
  it('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ];

    const promise = Promise.resolve({ data: { hits: stories } });

    axios.get.mockImplementationOnce(() => promise);

    render(<App />);

    await userEvent.click(screen.getByRole('button'));

    waitFor(() => promise);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('fetches stories from an API and fails', async () => {
    
  });
});