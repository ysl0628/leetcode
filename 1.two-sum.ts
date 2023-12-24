/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start

// 為什麼會想到用哈希表 -> 當我們需要查詢一個元素是否出現過，或者一個元素是否在集合裡的時候，就要第一時間考慮哈希法。
// 哈希表為什麼用 Map
// 本題 Map 是用來存什麼的
// map中的key和value是用來存什麼的

function twoSum(nums: number[], target: number): number[] {
  // 使用 Map 來記錄數字與索引
  const tempMap: Map<number, number> = new Map()
  let index: number | undefined
  let results: number[] = []
  for (let i = 0; i < nums.length; i++) {
    index = tempMap.get(target - nums[i])
    // 如果 index 不等於 undefined，代表有找到
    if (index !== undefined) {
      results = [i, index]
    }
    // Map 的 key 是數字，value 是索引 --> 這樣才能知道數字對應的索引
    tempMap.set(nums[i], i)
  }

  return results
}

// function twoSum(nums: number[], target: number): number[] {
//     let hash: Record<number,number> = {}
//     for(let i = 0; i < nums.length; i++){
//         if(hash[target - nums[i]] !== undefined) {
//             return [i, hash[target - nums[i]]];
//         }

//         hash[nums[i]] = i;
//     }
//     return []
// }
// @lc code=end
