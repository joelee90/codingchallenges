## Odd Occurence in Array

source: https://app.codility.com/programmers/lessons/2-arrays/

Find value that occurs in odd number of elements.

이제 문제를 풀기 위해서는 비트연사자에 대한 이해가 필요하다.

^(비트XOR)

0 | 0 : 0 <br>
0 | 1 : 1 <br>
1 | 0 : 1 <br>
1 | 1 : 0 <br>

피연산자를 비교해서 같으면 0, 다르면 1.

result = 0 으로 시작을 한다.
0과 비교되면 결과는 다른 수가된다.

```
let arr = [9, 3, 9, 3, 9, 7, 9]
```

0 ^ 9 = 9 <br>
9 ^ 3 = 10 <br>
10 ^ 9 = 3 <br>
3 ^ 3 = 0 <br>
0 ^ 9 = 9 <br>
9 ^ 7 = 14 <br>
14 ^ 9 = 7 <br>

내가 이해한바로는 ... 같은 pair 가 없는 수만 남게 된다. <br>
페어가 2개씩 있는 수는 0으로 돌아오기때문에, <br> 페어가 없는 수는 1이 되고,
그러므로 7만 남는다.

function이 작동되는 원리는 이해했지만, <br>
이상황에서 비트연산자를 사용한점은 <br>
페어가 있는것들은 0이 된다는 사실을 알고 있으면 사용 가능한 것 같다.
