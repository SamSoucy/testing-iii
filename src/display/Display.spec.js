// Test away!

import React from 'react';
import Display from "./Display"
import Controls from '../controls/Controls';
import { render} from 'react-testing-library';
import 'jest-dom/extend-expect';

describe("The Display", () => {
    it("renders without crashing", () => {
        render(<Display />);
    });

    it("displays if gate is open/closed and if it is locked/unlocked", () => {
        const { getByText } = render(<Display open={true} closed={true} locked={true} unlocked={true} />);
  
        getByText(/closed/i);
        getByText(/open/i);
        getByText(/locked/i);
        getByText(/unlocked/i);
    });
    
    // it("Gate is locked or unlocked", () => {
    //     const { getByText } = render(<Display locked={true} unlocked={true} />);

    //     getByText(/locked/i);
    //     getByText(/unlocked/i);
    // });
})
