import IPosition from './IPosition';
import { Direction } from './types';

export const parseInput = (lines: string[]): any => {
    if (!/^[0-9]+ [0-9]+$/.test(lines[0])) throw 'Invalid grid coordinates';

    const grid = lines.shift().split(' ');
    const mowers: any[] = [];

    global.grid = { x: parseInt(grid[0]), y: parseInt(grid[1]) };

    lines.forEach((line: string, i: number) => {
        if (i % 2) return;
        if (!/^[0-9]+ [0-9]+ [NEWS]$/.test(line)) throw 'Invalid mower starting coords';

        const positionArray = line.split(' ');
        const position: IPosition = { x: parseInt(positionArray[0]), y: parseInt(positionArray[1]) };
        const direction = positionArray[2] as Direction;
        const instructions = [...lines[i + 1]];

        mowers.push({ position, direction, instructions });
    });

    return mowers;
};