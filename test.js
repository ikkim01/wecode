function test(number) {
  let answer = [];
  number.map((num) => {
    if (num % 2 === 0) {
      answer.push(num);
    }
  });
  return answer;
}
