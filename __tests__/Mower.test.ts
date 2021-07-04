import IPosition from "../src/IPosition";
import Mower from "../src/Mower";
import { Direction } from "../src/types";

describe('Mower', () => {
    global.grid = { x: 5, y: 5 } as IPosition;
    console.log = jest.fn();

    let position: IPosition;

    beforeEach(() => position = { x: 2, y: 2 });

    it.each([['N'], ['E'], ['W'], ['S']])('should turn 90 degree left from %s', (direction: Direction) => {
        const expected = { N: 'W', E: 'N', W: 'S', S: 'E' };

        const mower = new Mower(position, direction, ['L']);

        expect(mower.direction).toBe(expected[direction]);
    });

    it.each([['N'], ['E'], ['W'], ['S']])('should turn 90 degree right from %s', (direction: Direction) => {
        const expected = { N: 'E', E: 'S', W: 'N', S: 'W' };

        const mower = new Mower(position, direction, ['R']);

        expect(mower.direction).toBe(expected[direction]);
    });

    it.each([['N'], ['E']])('should skip forward instruction (direction %s)', (direction: Direction) => {
        const expected: IPosition = { x: 5, y: 5 };
        const starting = expected;

        const mower = new Mower(starting, direction, ['F']);

        expect(mower.position).toEqual(expected);
    });

    it.each([['W'], ['S']])('should skip forward instruction (direction %s)', (direction: Direction) => {
        const expected: IPosition = { x: 0, y: 0 };
        const starting = expected;

        const mower = new Mower(starting, direction, ['F']);

        expect(mower.position).toEqual(expected);
    });

    it.each([['N'], ['E'], ['W'], ['S']])('should go one cell forward (direction %s)', (direction: Direction) => {
        const offset = ['N', 'E'].includes(direction) ? 1 : -1;
        const axis = ['W', 'E'].includes(direction) ? 'x' : 'y';
        const expected: IPosition = position;

        expected[axis] = expected[axis] + offset;

        const mower = new Mower(position, direction, ['F']);

        expect(mower.position).toEqual(expected);
    });

    it('should console.log it\'s state after completing all its instructions', () => {
        const mower = new Mower(position, 'N', ['LFRFLLFF']);

        expect(console.log).toHaveBeenCalledWith(`${mower.position.x} ${mower.position.y} ${mower.direction}`);
    });
});
