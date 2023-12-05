/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  // nums = [3,2,2,3], val = 3
  let i = 0 // 慢指針
  // let j = 0; 快指針
  for (let j = 0; j < nums.length; j++) {
    // 當快指針的值不等於目標值時，將快指針的值賦值給慢指針
    // 並將慢指針向前移動一位
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
    // 當快指針的值等於目標值時，不做任何操作，繼續向前移動
  }
  // 最後返回慢指針的位置，即為新數組的長度

  return i
}
// @lc code=end
