// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
// 	const midpoint = Math.floor((2 * n - 1) / 2)

// 	for (let row = 0; row < n; row++) {
// 		let level = "";

// 		for (let column = 0; column < 2 * n - 1; column++) {
// 			if (midpoint - row <= column && midpoint + row >= column) {
// 				level += "#";
// 			} else {
// 				level += " ";
// 			}
// 		}
// 		console.log(level);

// 	}
// }

//recursive solution
function pyramid(n, row = 1) {
  if (row > n) return;
 
  const foundationRow = (n * 2) - 1;
  const hashes = '#'.repeat((2 * row) - 1);
  const whiteSpace = ' '.repeat((foundationRow - hashes.length) / 2);
 
  console.log(whiteSpace + hashes + whiteSpace);
  return pyramid(n, row + 1);
}

module.exports = pyramid;
