// Test away

import React from 'react';
import Controls from '../controls/Controls';
import Display from '../display/Display';
import { render} from 'react-testing-library';
import 'jest-dom/extend-expect';


describe("Shows the controls and display", () => {
    it("renders without crashing", () => {
        render(<Controls />);
        render(<Display />);
    });

})
