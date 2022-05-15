const leets2 = (l1, l2) => {
	// ADD TWO NUMBERS
	// https://leetcode.com/problems/add-two-numbers/
	let l1Str = Array.from(l1).reverse().join('');
	let l2Str = Array.from(l2).reverse().join('');

	const sum = Number(l1Str) + Number(l2Str);
	// const toNum = num => Number(num);
	// let result = Array.from(String(sum), toNum);
	let result = String(sum)
		.split('')
		.map((num) => {
			return Number(num);
		});
	return result.reverse();
};

console.log('ex1', leets2([2, 4, 3], [5, 6, 4]));
console.log('ex2', leets2([0], [0]));
console.log('ex3', leets2([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
