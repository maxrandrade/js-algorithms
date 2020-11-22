// Create a function which returns the amount from 1 up to n (including n)

// O(n) - As n increases, the runtime increases at the same proportion as n
const addUpTo_v1 = n => {
	let total = 0
	for (let i = 0; i <= n; i++) {
		total += i
	}
	return total
}

// O(1) - No matter how much n increases, the runtime will always be roughly the same
const addUpTo_v2 = n => {
	return n * (n + 1) / 2
}

// O(n²) - As n increases, the run time increases on a square proportion
const printAllPairs = n => {
	for (let i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
}