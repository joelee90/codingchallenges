// Day 7: Regular Expressions 1
const re = /^([aeiou]).*\1$/;

1- ^ asserts position at start of the string
2- 1st Capturing Group ([aeiou])
3- .* matches any character (except newline) - between zero and unlimited times, as many times as possible, giving back as needed (greedy)
4- \1 matches the same text as most recently matched by the 1st capturing group
5- $ asserts position at the end of the string

const re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/;

let re = RegExp(/\d{1,}/g);
