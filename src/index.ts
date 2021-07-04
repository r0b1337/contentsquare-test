import Mower from './Mower';
import { parseInput } from './parseInput';
import * as fs from 'fs';

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
