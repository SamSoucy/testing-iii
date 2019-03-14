// Test away!

import React from 'react';
import Controls from './Controls';
import { render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';


describe("TheControls", () => {
    it("renders without crashing", () => {
        render(<Controls />);
    });

    it("provide buttons to toggle the closed and locked states.", () => {
        const { getByTestId } = render(<Controls />);
        const button = getByTestId("closed");

        expect(button).toHaveTextContent(/Close Gate/i);
    });

        const { getByTestId } = render(<Controls />);
        const button = getByTestId("locked");

        expect(button).toHaveTextContent(/lock gate/i)
});

describe("text changes ", () => {
    it("buttons' text changes to reflect the state the door will be in if clicked", () => {
        const { getByTestId } = render(<Controls />);
        const button = getByTestId("closed");
        fireEvent.click(button);
        expect(button).toHaveTextContent(/close Gate/i);
        
    });
        const { getByTestId } = render(<Controls />);
        const button = getByTestId("locked");
        fireEvent.click(button);
        expect(button).toHaveTextContent(/Lock Gate/i);
});