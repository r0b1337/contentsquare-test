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

    it('should throw \'Please fill at least one mower\'', () => {
        expect(() => parseInput(['5 5'])).toThrow('Please fill at least one mower');
    });

    it('should throw \'A mower is lacking of instructions\'', () => {
        expect(() => parseInput(['5 5', '1 1 N'])).toThrow('A mower is lacking of instructions');
    });

    it('should throw \'A mower cannot be placed out of the lawn\'', () => {
        expect(() => parseInput(['5 5', '6 6 N'])).toThrow('A mower cannot be placed out of the lawn');
    });

    it.each([
        [[' LFRFFF   ']],
        [['fflfr']],
        [['FLLFRA']],
    ])('should throw \'Instructions %j are invalid\'', (input: string[]) => {
        expect(() => parseInput(['5 5', '1 2 N', ...input])).toThrow(`Instructions '${input}' are invalid`);
    });
});
