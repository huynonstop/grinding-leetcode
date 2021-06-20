/**
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let hashSet = new Map();
  let find = (node) => {
    if(node === null) return false;
    if(hashSet.has(k - node.val)) {
      return true;
    } 
    hashSet.set(node.val, true);
    return find(node.left) || find(node.right)
  }
  return find(root)
};

// public class Solution {
//   public boolean findTarget(TreeNode root, int k) {
//       Set < Integer > set = new HashSet();
//       Queue < TreeNode > queue = new LinkedList();
//       queue.add(root);
//       while (!queue.isEmpty()) {
//           if (queue.peek() != null) {
//               TreeNode node = queue.remove();
//               if (set.contains(k - node.val))
//                   return true;
//               set.add(node.val);
//               queue.add(node.right);
//               queue.add(node.left);
//           } else
//               queue.remove();
//       }
//       return false;
//   }
// }

// public class Solution {
//   public boolean findTarget(TreeNode root, int k) {
//       List < Integer > list = new ArrayList();
//       inorder(root, list);
//       int l = 0, r = list.size() - 1;
//       while (l < r) {
//           int sum = list.get(l) + list.get(r);
//           if (sum == k)
//               return true;
//           if (sum < k)
//               l++;
//           else
//               r--;
//       }
//       return false;
//   }
//   public void inorder(TreeNode root, List < Integer > list) {
//       if (root == null)
//           return;
//       inorder(root.left, list);
//       list.add(root.val);
//       inorder(root.right, list);
//   }
// }