let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 10]
const total = numbers.reduce((sum, number) => sum + number, 0);
const avg = total / numbers.length;

console.log(`diem trung binh: ${avg.toFixed(2)}`);
