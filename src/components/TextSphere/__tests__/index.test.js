import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextSphere from "..";

afterEach(cleanup);

describe('about component', () => {
    //baseline render
    it('renders', () => {
        render(<TextSphere />);
    });

    //snapshot test
    it('matches snapshot on DOM', () => {
        const { asFragment } = render(<TextSphere />);

        expect(asFragment()).toMatchSnapshot();
    });
});