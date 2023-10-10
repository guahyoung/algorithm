function solution(num_list) {
  const multi = num_list.reduce((acc, cur) => acc * cur, 1);
  const sum = num_list.reduce((acc, cur) => acc + cur, 0);
  const square = sum ** 2;

  if (multi < square) {
    return 1;
  } else {
    return 0;
  }
}
