let number = +prompt('Give us a number:');
for (i = 1; i <= number; i++) {
  let output = i;
  if (i % 15 == 0) {
    output = 'FizzBuzz';
  } else if (i % 5 == 0) {
    output = 'Buzz';
  } else if (i % 3 == 0) {
    output = 'Fizz';
  }
  console.log(output);
}
