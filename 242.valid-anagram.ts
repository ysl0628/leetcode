/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start

// function isAnagram(s: string, t: string): boolean {
//     if(s.length !== t.length) return false
//     const table = new Map();
//     for(let i of s) {
//         // 初始的時候 table 的 value 為 undefined
//         table.set(i, (table.get(i) || 0) + 1)
//     }
//     for(let i of t) {
//         if(!table.has(i) || table.get(i) === 0) return false;
//         table.set(i, table.get(i) - 1)
//     }
//     return true
// };

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  let tableArr: number[] = new Array(26).fill(0)
  let pivot: number = 'a'.charCodeAt(0)

  for (let i = 0; i < s.length; i++) {
    tableArr[s.charCodeAt(i) - pivot]++
    tableArr[t.charCodeAt(i) - pivot]--
  }

  return tableArr.every((i) => i === 0)
}
// @lc code=end
