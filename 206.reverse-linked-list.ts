/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
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

// function reverseList(head: ListNode | null): ListNode | null {
//     let temp: ListNode | null = null;
//     let prev: ListNode | null = null;
//     let cur: ListNode | null = head;
//     while(cur) {
//         temp = cur.next;
//         cur.next = prev;

//         prev = cur;
//         cur = temp;
//     }
//     return prev
// };

function reverseList(head: ListNode | null): ListNode | null {
  const recur = (cur: ListNode | null, prev: ListNode | null) => {
    // prev 代表新的鏈頭，所以當 cur === null 代表到達了原始鏈結串列的末尾
    // 所以就返回以 prev 為頭的新鏈結串列
    if (cur === null) return prev
    let temp: ListNode | null = null
    temp = cur.next
    // 翻轉的關鍵
    cur.next = prev

    return recur(temp, cur)
  }

  return recur(head, null)
}
// @lc code=end
