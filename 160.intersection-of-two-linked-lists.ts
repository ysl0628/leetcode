/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const generateLength = (listNode: ListNode | null) => {
  let i = 0
  let cur = listNode

  while (cur) {
    i++
    cur = cur.next
  }
  return i
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let curA: ListNode | null = headA
  let curB: ListNode | null = headB
  // 取得 A 和 B 的長度
  let lenA = generateLength(headA)
  let lenB = generateLength(headB)

  // 如果 A 小於 B 將兩者交換
  if (lenA < lenB) {
    // 交換 A 與 B 的值和長度
    ;[curA, curB] = [curB, curA]
    ;[lenA, lenB] = [lenB, lenA]
  }

  // 兩個長度差異
  let lenCount = lenA - lenB
  // 將 A 與 B 對齊
  while (lenCount-- > 0) {
    // 注意是當 lenCount > 0 時才移動
    curA = curA.next
  }

  while (curA && curB) {
    if (curA === curB) {
      // 要整個鏈結都相等才行，不能只比較值
      return curA
    }
    curA = curA.next
    curB = curB.next
  }
  return null
}
// @lc code=end
