# contentsquare-test
Technical test for [ContentSquare](https://contentsquare.com/).

# Usage
Install dependencies:
```shell
$ yarn
```
Run program:
```shell
$ yarn start <file>
```
Run test suits:
```shell
$ yarn jest
```

# Cheatsheet
We're building an algorithm to pilot lawn mowers in a **rectangular** surface (represented as a **grid**) with [**TypeScript**](https://www.typescriptlang.org/).

Each mower can be represented by
- a two-dimensional **position** of **type** `{ x: number, y:number }`
- an **orientation** of **type** `'N' | 'E' | 'W' | 'S'` that is a **cardinal direction**

The mowers are driven by **instructions** from an input file like this :
```shell
5 5 # coordinates of the upper-right corner of the lawn, this way we define the surface of the lawn, starting from 0 0
1 2 N # starting position/orientation of the 1st mower
LFLFLFLFF # moving instructions for the 1st mower
3 3 E # starting position/orientatin of the 2nd mower
FFRFFRFRRF # moving instructions for the 2nd mower
```

**Instructions** that are of type `'L' | 'R' | 'F'` does the following :
- `L` makes the mower rotate 90 degrees to the **left**
- `R` makes the mower rotate 90 degrees to the **right**
- `F` makes the mower move one cell **forward** (depends on his **orientation**)

Mowers **can't** get out of the lawn, if an **instruction** tells one to, he'll just **skip** it.

Mowers are processed **synchronously**, thus the **next** mower will start moving only when the **previous** one has completed **all** his instructions.

The program should **output** final positions of mowers in the **same format** as the input file like :
```shell
1 3 N # final position of the 1st mower
5 1 E # final position of the 2nd mower
```
