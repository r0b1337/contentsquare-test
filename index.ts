const fs = require('fs');

const parseInput = (lines: string[]): any => {
    if (!/^[0-9]+ [0-9]+$/.test(lines[0])) throw 'Invalid grid coordinates';

    const grid = lines.shift().split(' ').map((n: string) => parseInt(n));
    const mowers: any[] = [];

    lines.forEach((line: string, i: number) => {
        if (i % 2) return;
        if (!/^[0-9]+ [0-9]+ [NEWS]$/.test(line)) throw 'Invalid mower starting coords';

        const position = line.split(' ');
        const instructions = lines[i + 1];

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
