// import * as React from 'react';
// import { render, screen } from '@testing-library/react';

// import App from './App';

// describe('App', () => {
//   it('renders App component', () => {
//     render(<App />);

//     screen.getByText('Search:');
//   });
// });

// import * as React from 'react';
// import { render, screen } from '@testing-library/react';

// import App from './App';

// describe('App', () => {
//   it('renders App component', () => {
//     render(<App />);

//     expect(screen.getByText('Search:')).toBeInTheDocument();
//   });
// });

// import * as React from 'react';
// import { render, screen } from '@testing-library/react';

// import App from './App';

// describe('App', () => {
//   it('renders App component', () => {
//     render(<App />);

//     // implicit assertion
//     // because getByText would throw error
//     // if element wouldn't be there
//     screen.getByText('Search:');

//     // explicit assertion
//     // recommended
//     expect(screen.getByText('Search:')).toBeInTheDocument();
//   });
// });

// import * as React from 'react';
// import { render, screen } from '@testing-library/react';

// import App from './App';

// describe('App', () => {
//   it('renders App component', () => {
//     render(<App />);

//     // fails
//     expect(screen.getByText('Search')).toBeInTheDocument();

//     // succeeds
//     expect(screen.getByText('Search:')).toBeInTheDocument();

//     // succeeds
//     expect(screen.getByText(/Search/)).toBeInTheDocument();
//   });
// });

// import * as React from 'react';
// import { render, screen } from '@testing-library/react';

// import App from './App';

// describe('App', () => {
//   it('renders App component', () => {
//     render(<App />);

//     screen.getByRole('');
//   });
// });

// import * as React from 'react';
// import { render, screen } from '@testing-library/react';

// import App from './App';

// describe('App', () => {
//   it('renders App component', () => {
//     render(<App />);

//     expect(screen.getByRole('textbox')).toBeInTheDocument();
//   });
// });

import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.debug();

    // fails
    expect(screen.getByText(/Searches for JavaScript/)).toBeNull();
  });
});

