const leets1 = (nums, target) => {
	//TWO SUM
	// https://leetcode.com/problems/two-sum/
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = 1; j < nums.length; j++) {
			let sum = nums[i] + nums[j];
			if (result.length === 0 && sum === target) {
				result = [i, j];
			}
		}
	}
	return result;
};
console.log('ex1', leets1([2, 7, 11, 15], 9));
console.log('ex2', leets1([3, 2, 4], 6));
console.log('ex3', leets1([3, 3], 6));
