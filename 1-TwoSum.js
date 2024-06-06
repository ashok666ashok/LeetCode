var twoSum = function (nums, target) {
  let output = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        output.push(i);
        output.push(j);
      }
    }
  }
  return output;
};
