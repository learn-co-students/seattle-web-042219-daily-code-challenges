# Scale Balancing

Have the function ScaleBalancing(strArr) read strArr which will contain two elements, the first being the two positive integer weights on a balance scale (left and right sides) and the second element being a list of available weights as positive integers. Your goal is to determine if you can balance the scale by using the least amount of weights from the list, but using at most only 2 weights. For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this means there is a balance scale with a weight of 5 on the left side and 9 on the right side. It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and adding a 2 to the right side. Both scales will now equal 11 and they are perfectly balanced. Your program should return a comma separated string of the weights that were used from the list in ascending order, so for this example your program should return the string 2,6

There will only ever be one unique solution and the list of available weights will not be empty. It is also possible to add two weights to only one side of the scale to balance it. If it is not possible to balance the scale then your program should return the string not possible.

Example IO:
```
scaleBalancing(["[3, 4]", "[1, 2, 7, 7]"])
=> "1"
scaleBalancing(["[13, 4]", "[1, 2, 3, 6, 14]"])
=> "3,6"
```

Question from [@ButlerBorst](https://github.com/ButlerBorst)

Source credit: https://coderbyte.com/editor/guest:Scale%20Balancing:Python

Solution by [@hannaengel](https://github.com/hannaengel)
