/* Part 1
This exercise is a flavor of the popular FizzBuzz question.

In the file src/part1.js, write a program that prints (using console.log) the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Home" instead of the number.
If the number is a multiple of 4, print the string "Away" instead of the number.
If the number is a multiple of both 3 and 4, print the string "HomeAway" instead of the number. */

for (let i = 100; i <= 200; i++) {
  if (i % 3 == 0 && i % 4 == 0) console.log('HomeAway');  
  else if (i % 3 == 0) console.log('Home');
  else if (i % 4 == 0) console.log('Away');
  else console.log(i);
}