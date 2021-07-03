import * as fs from 'fs';

const parseInput = (lines: string[]): any => {
    if (!/^[0-9]+ [0-9]+$/.test(lines[0])) throw 'Invalid grid coordinates';

    const grid = lines.shift().split(' ');
    const mowers: any[] = [];

    global.grid = { x: parseInt(grid[0]), y: parseInt(grid[1]) } ;

    lines.forEach((line: string, i: number) => {
        if (i % 2) return;
        if (!/^[0-9]+ [0-9]+ [NEWS]$/.test(line)) throw 'Invalid mower starting coords';

        const instructions = [...lines[i + 1]];

        mowers.push({position, instructions});
    });

    return { grid, mowers };
}

const main = (): void => {
    try {
        const inputFilename: string = process.argv[2];

        if (!inputFilename) throw 'Missing input filename';

        const input: string = fs.readFileSync(inputFilename, { encoding: 'utf8' });
        const lines = input.split('\n');
        const { grid, mowers } = parseInput(lines);

        console.log('grid :>> ', grid);
        console.log('mowers :>> ', mowers);
    } catch (err) {
        console.log(err);
    }
}

main();
