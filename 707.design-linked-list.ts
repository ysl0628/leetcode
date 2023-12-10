/*
 * @lc app=leetcode id=707 lang=typescript
 *
 * [707] Design Linked List
 */

// @lc code=start
// class ListNode {
//     public val: number;
//     public next: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = val === undefined ? 0 : val;
//         this.next = next === undefined ? null : next;
//     }
// }

class MyLinkedList {
  private curHead: ListNode | null
  private curTail: ListNode | null
  private size: number

  constructor() {
    this.curHead = null
    this.curTail = null
    this.size = 0
  }

  // [2,4,6], index = 2, return 6
  get(index: number): number {
    // console.log(this.size)
    if (index >= this.size) return -1
    let currentNode = this.curHead
    for (let i = 0; i < index; i++) {
      // 持續轉移指針，指針從 index = 0，轉移兩次
      // 此時 curHead 指向 index 2，
      currentNode = currentNode.next
    }
    return currentNode.val
  }

  // 0-d 1 2 3

  addAtHead(val: number): void {
    let newNode = new ListNode(val, this.curHead)
    this.curHead = newNode
    if (!this.curTail) {
      this.curTail = newNode
    }
    this.size++
  }

  addAtTail(val: number): void {
    // 最後一個節點的 next 為 null
    let lastNode = new ListNode(val, null)
    // 會有空 array 跟有數值的 array 兩種狀況
    if (!this.curTail) {
      // 如果是空 array，則鏈頭就是這個節點
      this.curHead = lastNode
    } else {
      // 將當前的練尾 next 由 null 改為新的尾節點
      this.curTail.next = lastNode
    }
    // 最後必須移動指針
    this.curTail = lastNode
    this.size++
  }

  // [2,4,6,8], index = 3, val = 7 => [2,4,6,7,8]
  addAtIndex(index: number, val: number): void {
    if (index > this.size) {
      return
    }
    if (index === 0) {
      this.addAtHead(val)
      return
    }
    // [1]
    if (index === this.size) {
      this.addAtTail(val)
      return
    }

    // 虛擬節點
    let curNode: ListNode | null = new ListNode(0, this.curHead)

    for (let i = 0; i <= index - 1; i++) {
      curNode = curNode.next!
    }
    curNode.next = new ListNode(val, curNode.next)
    this.size++
  }

  // [1,2,3], index = 2 =>
  deleteAtIndex(index: number): void {
    if (index >= this.size || !this.curHead) {
      return
    }
    if (index === 0) {
      this.curHead = this.curHead.next
      this.size--
      return
    }

    // 虛擬節點
    let prevNode: ListNode | null = new ListNode(0, this.curHead)
    let curNode = prevNode.next

    for (let i = 0; i <= index - 1; i++) {
      prevNode = prevNode.next!
      if (!curNode) {
      }
      curNode = curNode.next
    }

    if (!curNode) {
      prevNode.next = null
      // curNode =
      this.size--
      return
    }

    // prevNode = 2, curNode = 3
    prevNode.next = curNode.next
    if (index === this.size - 1) {
      this.curTail = prevNode
    }
    this.size--
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
