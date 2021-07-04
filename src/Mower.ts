import IPosition from "./IPosition";
import { Direction } from "./types";

export default class Mower {
    public position: IPosition;
    public direction: Direction;

    constructor(
        position: IPosition,
        direction: Direction,
        instructions: string[] = [],
    ) {
        this.position = position;
        this.direction = direction;

        instructions.forEach(instruction => this.processInstruction(instruction));

        console.log(`${this.position.x} ${this.position.y} ${this.direction}`);
    }

    private processInstruction(instruction: string): void {
        const to = {
            L: { N: 'W', E: 'N', W: 'S', S: 'E' }, // directions rotated to the left
            R: { N: 'E', E: 'S', W: 'N', S: 'W' }, // directions rotated to the right
        } as any;

        if (['L', 'R'].includes(instruction)) this.direction = to[instruction][this.direction];
        else if (instruction === 'F') {
            if (this.direction === 'N' && this.position.y < global.grid.x) this.position.y += 1;
            else if (this.direction === 'E' && this.position.x < global.grid.y) this.position.x += 1;
            else if (this.direction === 'S' && this.position.y > 0 ) this.position.y -= 1;
            else if (this.direction === 'W' && this.position.x > 0) this.position.x -= 1;
        }
    }
}
