var subsetsWithDup = function (nums) {
  let rs = [];
  let temp = [];
  nums.sort((a, b) => a - b);
  const backtrack = (start) => {
    rs.push([...temp]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] == nums[i - 1]) continue;
      temp.push(nums[i]);
      backtrack(i + 1);
      temp.pop();
    }
  };
  backtrack(0);
  return rs;
};
