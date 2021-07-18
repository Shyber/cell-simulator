import { getNeighbourCoordinates, getNeighboursCount } from './generalUtils';

test('test normal neighbour coordinates', () => {
    const neighbourCoordinates = getNeighbourCoordinates(1,1,20,20);

    const expectedResult = [
        { x: 0, y: 0},    // top left
        { x: 0, y: 1},    // mid left
        { x: 0, y: 2},    // bottom left
        { x: 1, y: 0},    // top mid 
        { x: 1, y: 2},    // bottom mid 
        { x: 2, y: 0},    // top right
        { x: 2, y: 1},    // mid right 
        { x: 2, y: 2}     // bottom right
    ];

    expect(neighbourCoordinates).toEqual(expectedResult);
});

test('test top left wrap neighbour coordinates', () => {
    const neighbourCoordinates = getNeighbourCoordinates(0,0,20,20);

    const expectedResult = [
        { x: 19, y: 19},    // top left
        { x: 19, y: 0},    // mid left
        { x: 19, y: 1},    // bottom left
        { x: 0, y: 19},    // top mid 
        { x: 0, y: 1},    // bottom mid 
        { x: 1, y: 19},    // top right
        { x: 1, y: 0},    // mid right 
        { x: 1, y: 1}     // bottom right
    ];

    expect(neighbourCoordinates).toEqual(expectedResult);
});

test('test bottom right wrap neighbour coordinates', () => {
    const neighbourCoordinates = getNeighbourCoordinates(19,19,20,20);
  
    const expectedResult = [
        { x: 18, y: 18},    // top left
        { x: 18, y: 19},    // mid left
        { x: 18, y: 0},    // bottom left
        { x: 19, y: 18},    // top mid 
        { x: 19, y: 0},    // bottom mid 
        { x: 0, y: 18},    // top right
        { x: 0, y: 19},    // mid right 
        { x: 0, y: 0}     // bottom right
    ];

    expect(neighbourCoordinates).toEqual(expectedResult);
});

test('test normal neighbour counts', () => {
    //Assuming we're at row 1 and col 1
    const neighbourCoordinates = [
        { x: 0, y: 0},    // top left
        { x: 0, y: 1},    // mid left
        { x: 0, y: 2},    // bottom left
        { x: 1, y: 0},    // top mid 
        { x: 1, y: 2},    // bottom mid 
        { x: 2, y: 0},    // top right
        { x: 2, y: 1},    // mid right 
        { x: 2, y: 2}     // bottom right
    ];
    const world = [
        [true, false ,false, false],    //row 0 col 0 has a neighbour
        [false, true, true, true],      //row 1 col 2 is a neighbour
        [false, false, false, false],   //no neighbours here
        [false, false, false, false]    //no neighbours here
    ];
    const neightbourCount = getNeighboursCount(world, neighbourCoordinates);

    expect(neightbourCount).toEqual(2);
});

test('test top left wrap neighbour counts', () => {
    //Assuming we're at row 0 and col 0 in a 4x4 world
    const neighbourCoordinates = [
        { x: 3, y: 3},    // top left
        { x: 3, y: 0},    // mid left
        { x: 3, y: 1},    // bottom left
        { x: 0, y: 3},    // top mid 
        { x: 0, y: 1},    // bottom mid 
        { x: 1, y: 3},    // top right
        { x: 1, y: 0},    // mid right 
        { x: 1, y: 1}     // bottom right
    ];
    const world = [
        [true, false ,false, true],    //row 0 col 3 is a neighbour (in non-wrapped world, the left neighbour)
        [false, false, true, true],     //row 1 col 3 is a neighbour (in non-wrapped world, the diagonal bottom-left neighbour)
        [false, false, false, false],   //no neightbours here
        [false, false, false, true]    //row 3 col 3 is a neighbour (in non-wrapped world, the diagonal top-left neighbour)
    ];
    const neightbourCount = getNeighboursCount(world, neighbourCoordinates);

    expect(neightbourCount).toEqual(3);
});