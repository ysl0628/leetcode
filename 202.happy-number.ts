/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
const getSum = (n: number) => {
  let sum = 0
  while (n) {
    // 1.第一次加總個位數的平方數
    // 3.第二次加總十位數的平方數
    sum += (n % 10) ** 2
    // 2.並將 n 置換為十位數的值(變成一個個位數)
    n = Math.floor(n / 10)
  }

  return sum
}

function isHappy(n: number): boolean {
  let set = new Set()
  // 當 n 不等於 1 並且不在 set 中，就持續遍歷，因為如果在 set 中出現，代表繞回自己，這樣永遠都是自己，早成死循環
  while (n !== 1 && !set.has(n)) {
    set.add(n)
    n = getSum(n)
  }

  return n === 1
}
// @lc code=end
