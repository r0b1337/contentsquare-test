import Mower from './Mower';
import IPosition from './IPosition';
import { Direction } from './types';
import * as fs from 'fs';

const parseInput = (lines: string[]): any => {
    if (!/^[0-9]+ [0-9]+$/.test(lines[0])) throw 'Invalid grid coordinates';

    const grid = lines.shift().split(' ');
    const mowers: any[] = [];

    global.grid = { x: parseInt(grid[0]), y: parseInt(grid[1]) } ;

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
}

const main = (): void => {
    try {
        const inputFilename: string = process.argv[2];

        if (!inputFilename) throw 'Missing input filename';

        const input: string = fs.readFileSync(inputFilename, { encoding: 'utf8' });
        const lines = input.split('\n');
        const results = parseInput(lines);
        const mowers = results.map((result: any) => new Mower(result.position, result.direction, result.instructions));

        mowers.forEach((mower: Mower) =>
            console.log(`${mower.position.x} ${mower.position.y} ${mower.direction}`));

        process.exit();
    } catch (err) {
        console.log(err);
    }
}

main();
