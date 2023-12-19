/*
 * @lc app=leetcode id=349 lang=typescript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const results: Set<number> = new Set()
  const set1: Set<number> = new Set(nums1)

  for (let i of nums2) {
    if (set1.has(i)) {
      results.add(i)
    }
  }

  return Array.from(results)
}
// @lc code=end
