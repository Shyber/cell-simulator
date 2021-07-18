import React, { useEffect, useState } from 'react';
import { Cell } from '../Components';
import { getNeighboursCount, getNeighbourCoordinates } from '../Utils/generalUtils';

import { Container, Label, Button, Toolbar, World, WorldRow } from './App.styles';

const App: React.FC = () => {
    const cellSize = 25;
    const worldSize = 10; 
    const [ world , setWorld ] = useState<Array<Array<boolean>>>( [] );
    const [ worldKey, setWorldKey] = useState('defaultKey');

    const resetWorld = (size: number) => {
        const newWorld: Array<Array<boolean>> = [];
        for(let row =0; row<size; row++){
            const rowValues: Array<boolean> = [];
            for(let col =0; col<size; col++)
                rowValues.push(false);
            newWorld.push(rowValues);
        }
        setWorld(newWorld);
    };

    const updateCellValue = (row: number,col: number,value: boolean) => {
        world[row][col] = value;
        setWorldKey(Math.random().toString());
    };

    const handleNextGeneration = () => {
        const nextGenWorld: Array<Array<boolean>> = [];
        for(let row =0; row<worldSize; row++){
            const rowValues: Array<boolean> = [];
            for(let col =0; col<worldSize; col++){
                const cellIsAlive = world[row][col];
                let cellWillLive = false;
                const neightbourCoordinates = getNeighbourCoordinates(row, col, worldSize, worldSize);
                const aliveNeighboursCount = getNeighboursCount(world, neightbourCoordinates);
          
                //if it's alive and has two neighbours, it'll live on
                if( aliveNeighboursCount  === 2)
                    cellWillLive = cellIsAlive;
                //if it has three neighbours, it'll live on or become alive
                else if(aliveNeighboursCount  === 3 )
                    cellWillLive = true;
                //if neighbours are anything other than 2 or 3, they die

                rowValues.push(cellWillLive);
            }
            nextGenWorld.push(rowValues);
        }
        setWorld(nextGenWorld);
    };
    
    useEffect(()=> {
        resetWorld(worldSize);
        setWorldKey(Math.random().toString());
    }, []);

    return (
        <Container>
            <Label>Cell Simulator</Label>
            <Toolbar>
                <Button onClick={() => resetWorld(worldSize)}>Reset</Button>
                <Button onClick={() => handleNextGeneration()}>Next Generation</Button>
            </Toolbar>
            {world && world.length && <World key={worldKey}>{ 
                world.map((row, rowIndex) => 
                    row && row.length && <WorldRow key={`${worldKey}-${rowIndex}`} style={{width: cellSize*worldSize}}>{
                        row.map( (col, colIndex) => { 
                            const name = `${rowIndex},${colIndex}`;
                            return <Cell key={name} name={name} alive={col} onClick={() => {
                                updateCellValue(rowIndex,colIndex,!col);
                            }}/>;
                        })}
                    </WorldRow>)
            }</World>}
        </Container>
    );
};

export default App;