function solution(num_list) {
  const lastOne = num_list[num_list.length - 1];
  const lastTwo = num_list[num_list.length - 2];

  if (lastOne > lastTwo) {
    return num_list.concat(lastOne - lastTwo);
  } else {
    return num_list.concat(lastOne * 2);
  }
}
