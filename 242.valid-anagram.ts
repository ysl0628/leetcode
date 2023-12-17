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
  // 如果兩個字串的長度不一樣就不是
  if (s.length !== t.length) return false
  // 建立一個長度 26 的 0 Array
  const arr = new Array(26).fill(0)
  // 定義 pivot 基準字元位置
  const pivot = 'a'.charCodeAt(0)

  for (let i = 0; i < s.length; i++) {
    // 相對位置為該字串的索引位置扣掉基準字元位置所得的相對位置
    // 遞增字串 s 的字母位置數字
    arr[s.charCodeAt(i) - pivot]++
    // 遞減字串 t 的字幕位置數值
    arr[t.charCodeAt(i) - pivot]--
  }

  // 如果 arr 中有非零的值則 return false
  return arr.every((i) => i === 0)
}
// @lc code=end
