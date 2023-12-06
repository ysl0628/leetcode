/*
 * @lc app=leetcode id=209 lang=typescript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  // target = 7, nums = [2,3,1,2,4,3]
  let i = 0
  // 需要 + 1，因為當 [1,2,3,4,5] 這種情況時，minLength 會一直是 0
  let minLength = nums.length + 1
  let sum = 0
  for (let j = 0; j < nums.length; j++) {
    // 如果 sum 小於 target，則因為不符合所以讓 j 繼續往前，將 sum 擴大
    sum += nums[j]
    while (sum >= target) {
      // 如果總和大於等於目標，就固定 j 並加大 i 的值，以縮小範圍
      // 總和算法為原總和扣掉原 i 的值
      // 並且重新比較 minLength 是否小於現在範圍的 array 長度
      minLength = Math.min(minLength, j - i + 1)
      sum -= nums[i++]
    }
  }

  return minLength === nums.length + 1 ? 0 : minLength
}
// @lc code=end
