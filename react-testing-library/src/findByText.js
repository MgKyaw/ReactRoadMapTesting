// import * as React from 'react';
// import { render, screen } from '@testing-library/react';

// import App from './App';

// describe('App', () => {
//   it('renders App component', async () => {
//     render(<App />);

//     expect(screen.queryByText(/Signed in as/)).toBeNull();

//     expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
//   });
// });

import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', async () => {
    render(<App />);

    expect(screen.queryByText(/Signed in as/)).toBeNull();

    screen.debug();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

    screen.debug();
  });
});