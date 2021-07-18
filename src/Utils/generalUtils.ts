import { Coordinate } from '../Types';

export function getNeighbourCoordinates(x: number, y: number, totalRows: number, totalColumns: number): Coordinate[] {
    // Each coordinate should have 8 neigbours, wrapping around x and y coordinates.
    const result: Coordinate[] = [];

    const maxX = totalColumns - 1;
    const maxY = totalRows - 1;

    // Starting from the left side
    const lX = x === 0 ? maxX : x - 1;

    // Top left
    result.push({ x: lX, y: y === 0 ? maxY : y - 1 });
    // Left
    result.push({ x: lX, y });
    // Bottom left
    result.push({ x: lX, y: y === maxY ? 0 : y + 1 });

    // The vertical middles
    // Top middle
    result.push({ x, y: y === 0 ? maxY : y - 1 });
    // Bottom middle
    result.push({ x, y: y === maxY ? 0 : y + 1 });

    // Now the right side
    const rX = x === maxX ? 0 : x + 1;

    // Top right
    result.push({ x: rX, y: y === 0 ? maxY : y - 1 });
    // Right
    result.push({ x: rX, y });
    // Bottom right
    result.push({ x: rX, y: y === maxY ? 0 : y + 1 });

    return result;
}

export function getNeighboursCount( world: Array<Array<boolean>>, neighbours: Coordinate[] ): number {
    let neighboursCount = 0;

    neighbours.forEach( (neighbour:Coordinate) => {
        const { x , y } = neighbour;
        if(x < world.length && y < world[x].length)
            neighboursCount += world[x][y] ? 1 : 0;
    });
    return neighboursCount;
}
