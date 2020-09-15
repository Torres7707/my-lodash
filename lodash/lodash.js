var _ = require('lodash');

//1.chunk=>将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
console.log(_.chunk([1, 2, 3], 2));

function fakeChunk(arr, size) {
	size = size || 1;
	let result = [];
	let l = arr.length;
	let s = Math.ceil(l / size);
	for (let i = 0; i < s; i++) {
		result[i] = arr.slice(size * i, size * (i + 1));
	}
	return result;
}
console.log(fakeChunk([1, 2, 3, 4], 3));

//2.compact=>创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
console.log(_.compact([1, 2, '', 3, false, null, undefined, 7]));

function fakeCompact(arr) {
	if (!Array.isArray(arr)) return [];
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			result.push(arr[i]);
		}
	}
	return result;
}

console.log(fakeCompact([1, 2, '', 3, false, null, undefined, 7]));
