import React from 'react';
import { render, screen } from '@testing-library/react';
import Cell from './Cell';

test('renders learn react link', () => {
    render(<Cell alive/>);
    const cellElement = screen.getByText(/cell/i);
    expect(cellElement).toBeInTheDocument();
});
