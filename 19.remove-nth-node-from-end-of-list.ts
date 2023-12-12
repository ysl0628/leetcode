/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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

// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//     let dummyHead: ListNode | null = new ListNode(0, head);
//     let slow: ListNode | null = dummyHead;
//     let fast: ListNode | null = dummyHead;

//     // fast 先到 n+1 的位子
//     for( let i = 0 ; i <= n ; i++) {
//         fast = fast.next
//     }

//     // 只要 fast 不是 null，代表 slow 還沒到 n 的位子，所以 fast 和 slow 就繼續前進
//     while(fast !== null){
//         fast = fast.next;
//         slow = slow.next;
//     }

//     // 剔除指定的位子
//     slow.next = slow.next.next

//     return dummyHead.next

// };

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummyHead: ListNode | null = new ListNode(0, head)
  let slow: ListNode | null = dummyHead
  let fast: ListNode | null = head
  let i = 1

  while (fast !== null) {
    fast = fast.next
    if (i > n) {
      slow = slow.next
    }
    i++
  }

  // 剔除指定的位子
  slow.next = slow.next.next

  return dummyHead.next
}
// @lc code=end
