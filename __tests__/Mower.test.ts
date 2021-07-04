import IPosition from "../src/IPosition";
import Mower from "../src/Mower";
import { Direction } from "../src/types";

describe('Mower', () => {
    global.grid = { x: 5, y: 5 } as IPosition;

    const position: IPosition = { x: 0, y: 0 };

    it.each([['N'], ['E'], ['W'], ['S']])('should turn 90 degree left from %s', (direction: Direction) => {
        const expected = { N: 'W', E: 'N', W: 'S', S: 'E' };

        const mower = new Mower(position, direction, ['L']);

        expect(mower.direction).toBe(expected[direction]);
    });
});
