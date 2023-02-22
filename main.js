let column_1 = [6,5,9,6,3,2,7,9,5,10,8,4,5,6,5,3,4,7,6,1,7,10,3,2,6,6,1,8,6,7];
let column_2 = [3,3,1,7,9,9,6,4,6,10,7,7,6,5,10,9,5,2,6,6,5,1,5,5,6,2,1,9,8,5];
let column_3 = [86,53,58,40,72,90,77,48,72,74,40,78,85,77,97,50,77,77,46,72,59,41,40,99,47,58,44,43,75,47];
let column_4 = [52,54,51,56,95,64,75,57,93,51,87,96,42,73,56,74,79,40,56,51,64,91,82,60,49,78,75,60,54,77];
let sum_1 = 0;
let sum_2 = 0;
let sum_3 = 0;
let sum_4 = 0;
let i = 0;
while (i<=29) {
	sum_1 += column_1[i];
	sum_2 += column_2[i];
	sum_3 += column_3[i];
	sum_4 += column_4[i];
	i = i + 1;
}
let sums = [sum_1, sum_2, sum_3, sum_4];
let sum = 0;

for (let j=0; j<=3; j++) {
	sum += sums[j];
}
const results = {
	col1: column_1,
	col2: column_2,
	col3: column_3,
	col4: column_4,
	sums: sums,
	total_score: sum
}

console.log(results);
