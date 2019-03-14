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

    it("displays 'Closed' if the closed prop is true and 'Open' if otherwise", () => {
        const { getByText } = render(<Display closed={true} />);

        getByText(/closed/i);
    });
        const { getByText } = render(<Display closed={false} />);

        getByText(/open/i);
});
    
describe("displays 'Locked' and'Unlocked'", () => {

    it("displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise", () => {
        const { getByText } = render(<Display locked={true} />);
        getByText(/locked/i);
    });

        const { getByText } = render(<Display locked={false} />);
        getByText(/unlocked/i);
    
});

describe("locked and closed color", () => {
    it("when locked or closed use the red-led class", () => {
        const { getByText } = render(<Display locked={true} />);
        const locked = getByText(/locked/i);
        expect(locked).toHaveClass('green-led');
    });
        const { getByText } = render(<Display closed={true} />);
        const closed = getByText(/closed/i);
        expect(closed).toHaveClass('red-led');
   
});

describe("unlocked and open color", () => {
    it("when unlocked or open use the green-led class", () => {
        const { getByText } = render(<Display unlocked={true} />);
        const unlocked = getByText(/locked/i);
        expect(unlocked).toHaveClass('green-led');
    });
        const { getByText } = render(<Display open={true} />);
        const open = getByText(/open/i);
        expect(open).toHaveClass('green-led');
})


