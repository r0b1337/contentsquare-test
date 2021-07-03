import IPosition from "./IPosition";
import { Direction } from "./types";

export default class Mower {
    public position: IPosition;
    public direction: Direction;

    constructor(
        position: IPosition,
        direction: Direction,
    ) {
        this.position = position;
        this.direction = direction;
    }
}
