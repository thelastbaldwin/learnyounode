var nums = process.argv.slice(2),
	total = 0;

nums.forEach(function(number){
	total += +number;
});

console.log(total);

