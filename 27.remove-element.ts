/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  // nums = [3,2,2,3], val = 3
  let i = 0 // 曼指針
  // let j = 0; 快指針
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
  }
  return i
}
// @lc code=end
