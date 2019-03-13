// Test away!

import React from 'react';
import Controls from './Controls';
import { render} from 'react-testing-library';
import 'jest-dom/extend-expect';


describe("TheControls", () => {
    it("renders without crashing", () => {
        render(<Controls/>);
    });
})
