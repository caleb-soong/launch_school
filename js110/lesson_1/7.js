/*

Step 1: Understand the Problem

Leftover Blocks

You have a number of building blocks that can be used to build a valid structure.
There are certain rules about what determines the validity of a structure:

The building blocks are cubes
The structure is built in layers
The top layer is a single block
A block in an upper layer must be supported by four blocks in a lower layer
A block in a lower layer can support more than one block in an upper layer
You cannot leave gaps between blocks
Write a program that, given the number for a specific amount of cubes,
calculates the number of blocks left over after building the tallest possible valid structure.

Are all blocks the same size?
Must a block be centered on the four blocks supporting it?
Must any two blocks touching on the same layer form a rectangular prism?
If the answers to the above questions are all "yes", then the top layer has
one block, the one beneath has four, the one beneath has nine, and the one
beneath that has sixteen. These are the squares of consecutive whole numbers.

Input: total amount of cubes in the structure
Output: remaining cubes that don't fit the structure which can be zero.

Step 2: Examples and test cases

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

There are no leftovers when the input is the sum of the first n perfect squares.

Step 3: Data Structures

An array could list the number of blocks in each descending layer starting with 1
for the number of blocks in the topmost layer.

Step 4: Algorithm

Given an input number, create layers starting with the top layer. There must be a way to check after each layer
(and before the first layer) if there are enough blocks to make the next layer (or the first layer), and the input number must be reduced
as layers are made. If there are not enough blocks to make the next layer, then that is the remainder which is the output.

Step 5: Implement a Solution in Code
*/

function calculateLeftoverBlocks(totalBlocks) {
  let numberOfBlocksRemaining = totalBlocks;
  let currentLayer = 0;
  while (true) {
    let nextLayer = currentLayer + 1;
    let numberOfBlocksRequired = nextLayer ** 2;
    if (numberOfBlocksRemaining >= numberOfBlocksRequired) {
      numberOfBlocksRemaining = numberOfBlocksRemaining - numberOfBlocksRequired;
      currentLayer++;
    } else {
      return numberOfBlocksRemaining;
    }
  }
}

console.log(calculateLeftoverBlocks(0) === 0);
console.log(calculateLeftoverBlocks(1) === 0);
console.log(calculateLeftoverBlocks(2) === 1);
console.log(calculateLeftoverBlocks(4) === 3);
console.log(calculateLeftoverBlocks(5) === 0);
console.log(calculateLeftoverBlocks(6) === 1);
console.log(calculateLeftoverBlocks(14) === 0);