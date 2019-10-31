Source:
 https://app.codility.com/programmers/lessons/1-iterations/

 Find the length of the longest binary gap between 1s and retun 0 if N doesn't contain any.

 1. Convert integer into binary STRING.
 2. Access the STRING, use split() to access each integer.
 3. Find the distance between 1s, and choose the longest one.
 4. Conditions:
     if N === 0 count
     if N === 1 stop count

`
if (i === "0") {
  zeroCount += 1;
} else {
  result = Math.max(result, zeroCount);
  zeroCount = 0;
}
`

Count two variables:
    zeroCount: Number of zeros,
    result: result of zeroCount

Loop through the array and count number of '0'.
If i === '1', compare the result and zeroCount, return the max value and set it to the value of result and set zeroCount to '0'.

Basic logic: Count the number of '0' and stop when reaches to '1',
and take that count of '0' and set it to the result variable.

So this happens when the next zeroCount is larger than the previous zeros, and overwrites the current zeroCount with the new zeroCount.
Thus, only returns the largest binary gap within the array.

First result will start with 0, but will vary depending on its way to counting zeros. The largest binary gap will always will be returned.

*Focusing on finding the largerst binary gap
