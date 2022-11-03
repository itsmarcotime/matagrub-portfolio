import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline render
    it('renders', () => {
        render(<Nav />);
    });

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);

        expect(asFragment()).toMatchSnapshot();
    });
});

//add more tests when adding animated image to nav, 20.2.5

describe('links are shown', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);

        expect(getByTestId('home')).toHaveTextContent('Home');
        expect(getByTestId('about')).toHaveTextContent('About');
    });
});