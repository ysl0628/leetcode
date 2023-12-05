/*
 * @lc app=leetcode id=977 lang=typescript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  // [-7,-3,2,3,11]
  let left = 0
  let right = nums.length - 1
  let newIndex = right
  const newArray: number[] = []
  while (left <= right) {
    let leftValue = nums[left] * nums[left]
    let rightValue = nums[right] * nums[right]
    if (leftValue < rightValue) {
      // 當左邊的值小於右邊的值時，將右邊的值放入新數組中的最後一位
      // 並將右指針向前移動一位
      newArray[newIndex--] = rightValue
      right--
    } else {
      // 當左邊的值大於或等於右邊的值時，將左邊的值放入新數組中的最後一位
      // 並將左指針向前移動一位
      newArray[newIndex--] = leftValue
      left++
    }
  }
  return newArray
}
// @lc code=end
