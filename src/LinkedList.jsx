import ListNode from "./ListNode";

class LinkedList
{
    constructor()
    {
        this.head = null;
    }

    tailInsert(value)
    {
        if (this.head === null)
        {
            this.head = new ListNode(value);
            return;
        }
        let tailNode = this.iterateToTailNode();
        tailNode.next = new ListNode(value);
    }

    iterateToTailNode()
    {
        let currentNode = this.head.next;
        while (currentNode.next !== null)
            currentNode = currentNode.next;
        return currentNode;
    }

    sortedInsert(value)
    {
        if (this.head.value > value)
            this.headInsert(value);

        let currentNode = this.head.next;
        while (currentNode.next !== null && currentNode.next.value > value)
            currentNode = currentNode.next;
        
        //insert at current position
        let newNode = new ListNode(value);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    headInsert(value)
    {
        let newHead = new ListNode(value);
        newHead.next = this.head;
        this.head = newHead;
    }
}