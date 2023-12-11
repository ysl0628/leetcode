/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  let dummy: ListNode | null = new ListNode(0, head)
  let prev: ListNode | null = dummy

  while (prev.next && prev.next.next) {
    let tempFirst = prev.next
    let tempSecond = prev.next.next

    prev.next = tempSecond
    tempFirst.next = tempSecond.next
    tempSecond.next = tempFirst

    prev = tempFirst
  }

  return dummy.next
}
// @lc code=end
