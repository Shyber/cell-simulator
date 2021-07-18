export interface CellProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    name?: string;
    alive: boolean;
    width?: number;
    height?: number;
  }