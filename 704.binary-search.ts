/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = Math.round((left + right) / 2)
    if (target === nums[mid]) {
      // [-1,0,3,5,9,12]
      // mid = 3 => 5
      return mid
    }

    if (target > nums[mid]) {
      // [9,12]
      left = mid + 1
    }

    if (target < nums[mid]) {
      // left = 4, right = 5, mid = 5, nums[mid] = 12, target = 9
      right = mid - 1
    }
  }
  return -1
}

// @lc code=end
