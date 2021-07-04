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
});
