import { parseInput } from "../src/parseInput";

describe('parseInput', () => {
    it.each([
        [[]],
        [['A 0']],
        [['0 A']],
        [['  5 5  ']],
    ])('should throw \'Invalid grid coordinates\' -- %j', (input: string[]) => {
        expect(() => parseInput(input)).toThrow('Invalid grid coordinates');
    });

    it.each([
        [['']],
        [['1 2 Z']],
        [['A 2 N']],
        [[' 1 2 N   ']],
    ])('should throw \'Invalid mower starting coords\' -- %j', (input: string[]) => {
        expect(() => parseInput(['5 5', ...input])).toThrow('Invalid mower starting coords');
    });
});