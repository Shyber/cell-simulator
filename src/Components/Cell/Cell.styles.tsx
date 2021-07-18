import Styled from 'styled-components';
import { CellProps } from './Cell.types';

export const StyledCell = Styled.div<CellProps>`
  ${({ alive, width, height }) => `
      background-color: ${alive ? 'black' : 'white'};
      width: ${width ? width - 1 : 24}px;
      height: ${height ? height - 1 : 24}px;
      border: 1px solid ${alive ? 'white' : 'black'};
      flex: 1;
      font-size: 10px;
      cursor: pointer;
    `
}`;