import Mower from './Mower';
import { parseInput } from './parseInput';
import * as fs from 'fs';

const main = (): void => {
    try {
        const inputFilename: string = process.argv[2];

        if (!inputFilename) throw 'Missing input filename';

        const input: string = fs.readFileSync(inputFilename, { encoding: 'utf8' });
        const separator = process.platform === 'win32' ? '\r\n' : '\n';
        const lines = input.split(separator);
        const results = parseInput(lines);

        results.map((result: any) => new Mower(result.position, result.direction, result.instructions));

        process.exit();
    } catch (err) {
        console.log(err);
    }
}

main();
