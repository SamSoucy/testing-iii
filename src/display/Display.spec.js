// Test away!

import React from 'react';
import Display from './Display';
import { render} from 'react-testing-library';
import 'jest-dom/extend-expect';

describe("The Display", () => {
    it("renders without crashing", () => {
        render(<Display />);
    });
})
