/*
 * @lc app=leetcode id=454 lang=typescript
 *
 * [454] 4Sum II
 */

// @lc code=start
function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  let sumMap: Map<number, number> = new Map()
  let count: number = 0
  for (let i of nums1) {
    for (let j of nums2) {
      const sum = i + j
      // Map 要加的是 key = sum，value = sum 出現的次數
      sumMap.set(sum, (sumMap.get(sum) || 0) + 1)
    }
  }

  for (let k of nums3) {
    for (let l of nums4) {
      const sum = k + l
      // 0 - sum 代表上面的 i + j + k + l = 0
      // 如果 sumMap 中有 0 - sum 的 key，代表有找到
      // 並且 count 要加上 sumMap 中 0 - sum 的 value
      count += sumMap.get(0 - sum) || 0
    }
  }

  return count
}
// @lc code=end
