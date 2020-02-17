import React from "react";
import * as rtl from "@testing-library/react";
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import axios from 'axios';
import { getData } from './api/getData';
import StarWarsCharacters from './components/StarWarsCharacters';


test('loads previous items', async () => {
    const { getByText, findByText } = render(<StarWarsCharacters />)

    // Click button
    fireEvent.click(getByText('Previous'))
})

test('loads next items', async () => {
    const { getByText, findByText } = render(<StarWarsCharacters />)

    // Click button
    fireEvent.click(getByText('Next'))
})
/*
test('made api call', async () => {
    const wrapper = rtl.render(<getData />);
    expect(axios.get).toHaveBeenCalled(); 
})
*/
test('renders without crashing', () => {
    const wrapper = rtl.render(<App />)
    expect(wrapper).toBeVisible;
});

test('renders without crashing', () => {
    const wrapper = rtl.render(<StarWarsCharacters />)
    expect(wrapper).toBeVisible;
});

test('previous', () => {
// Arrange
    const expectedPrevious = 1;
    const container = render(<StarWarsCharacters />);
    const getByText = container.getByText;
    const getAllByText = container.getAllByText;

    // Act
    const previousElements = getAllByText(/previous/i);
    getByText(/previous/i);

    // Assert
    expect(previousElements.length).toBe(expectedPrevious);
});

test('next', () => {
    // Arrange
        const expectedNext = 1;
        const container = render(<StarWarsCharacters />);
        const getByText = container.getByText;
        const getAllByText = container.getAllByText;
    
        // Act
        const nextElements = getAllByText(/next/i);
        getByText(/next/i);
    
        // Assert
        expect(nextElements.length).toBe(expectedNext);
    });
