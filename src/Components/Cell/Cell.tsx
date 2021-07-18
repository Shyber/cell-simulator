import React from 'react';
import { StyledCell } from './Cell.styles';
import { CellProps } from './Cell.types';

const Cell: React.FC<CellProps> = ({ name, ...props }) => {
    return (
        <StyledCell {...props}>{name}</StyledCell>
    );
};

Cell.defaultProps = {
    name: 'cell',
    alive: false,
    width: 25,
    height: 25
};

export default Cell;