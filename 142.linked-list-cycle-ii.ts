/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
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

function detectCycle(head: ListNode | null): ListNode | null {
  let fast: ListNode | null = head
  let slow: ListNode | null = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (fast === slow) {
      let indexA: ListNode | null = fast
      let indexB: ListNode | null = head

      while (indexA !== indexB) {
        indexA = indexA.next
        indexB = indexB.next
      }

      return indexA
    }
  }
  return null
}
// @lc code=end
