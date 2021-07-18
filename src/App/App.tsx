import React, { useEffect, useState } from 'react';
import { Cell } from '../Components';

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
    
    useEffect(()=> {
        resetWorld(worldSize);
        setWorldKey(Math.random().toString());
    }, []);

    return (
        <Container>
            <Label>Cell Simulator</Label>
            <Toolbar>
                <Button onClick={() => resetWorld(worldSize)}>Reset</Button>
                <Button onClick={() => resetWorld(worldSize)}>Next Generation</Button>
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