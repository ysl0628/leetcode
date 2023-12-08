/*
 * @lc app=leetcode id=203 lang=typescript
 *
 * [203] Remove Linked List Elements
 */

// @lc code=start
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  // head = [1,2,6,3,4,5,6] , val = 6
  // 建立虛擬鏈頭
  const data = new ListNode(0, head)
  let pre = data
  let cur = data.next

  // 當 data.next === null 時退出迴圈
  while (cur) {
    // 當 val 等於 cur.val 時，把 cur 指針替換成 cur.next，代表剔除 cur
    // 移除的方法是藉由 pre 的 next 去替代
    // cur 指針在判斷期間不被改變
    if (cur.val === val) {
      pre.next = cur.next
    } else {
      // 如果 cur.val 不等於 val，不是要剃出的數字，則把 pre 指針替換成 cur，去檢查下一個
      pre = cur
    }
    // 無論是否等於 val，都要將 cur 指針轉移給下一個，下一個就是 cur 的 next
    cur = cur.next
  }

  // 移除虛擬鏈頭
  return data.next
}
// @lc code=end
