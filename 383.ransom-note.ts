/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  const strArray: number[] = new Array(26).fill(0)
  const pivot = 'a'.charCodeAt(0)

  for (let s of magazine) {
    strArray[s.charCodeAt(0) - pivot]++
  }

  for (let l of ransomNote) {
    const index = l.charCodeAt(0) - pivot
    if (!strArray[index]) return false
    strArray[index]--
  }

  return true
}
// @lc code=end
