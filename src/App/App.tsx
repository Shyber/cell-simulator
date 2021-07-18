import React, { useEffect, useState } from 'react';
import { Cell } from '../Components';

import { Container, Label, World, WorldRow } from './App.styles';

const App: React.FC = () => {
    const cellSize = 25; 
    const [ world , setWorld ] = useState<Array<Array<boolean>>>( [] );
    const [ worldSize , setWorldSize ] = useState<number>( 10 );
    const [ worldKey, setWorldKey] = useState('defaultKey');

    const resetWorld = (size: number, liveRow = -1, liveCol=-1) => {
        const newWorld: Array<Array<boolean>> = [];
        for(let row =0; row<size; row++){
            const rowValues: Array<boolean> = [];
            for(let col =0; col<size; col++)
                rowValues.push(row===liveRow && col ===liveCol);
            newWorld.push(rowValues);
        }
        setWorld(newWorld);
    };

    const updateCellValue = (row: number,col: number,value: boolean) => {
        world[row][col] = value;
        setWorldKey(Math.random().toString());
    };
    
    useEffect(()=> {
        resetWorld(worldSize);
        setWorldKey(Math.random().toString());
    }, []);

    return (
        <Container>
            <Label>Cell Simulator</Label>
            {world && world.length && <World key={worldKey}>{ 
                world.map((row, rowIndex) => 
                    row && row.length && <WorldRow style={{width: cellSize*worldSize}}>{
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