import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from "..";

afterEach(cleanup);

describe('about component', () => {
    //baseline render
    it('renders', () => {
        render(<About />);
    });

    //snapshot test
    it('matches snapshot on DOM', () => {
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    });
});
