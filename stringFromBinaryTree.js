/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
  if (t == null) return '';
  if (t.left == null && t.right == null) return t.val + '';
  if (t.right == null) return t.val + '(' + tree2str(t.left) + ')';
  return t.val + '(' + tree2str(t.left) + ')(' + tree2str(t.right) + ')';
};
// public class Solution {
//   public String tree2str(TreeNode t) {
//       if (t == null)
//           return "";
//       Stack < TreeNode > stack = new Stack < > ();
//       stack.push(t);
//       Set < TreeNode > visited = new HashSet < > ();
//       StringBuilder s = new StringBuilder();
//       while (!stack.isEmpty()) {
//           t = stack.peek();
//           if (visited.contains(t)) {
//               stack.pop();
//               s.append(")");
//           } else {
//               visited.add(t);
//               s.append("(" + t.val);
//               if (t.left == null && t.right != null)
//                   s.append("()");
//               if (t.right != null)
//                   stack.push(t.right);
//               if (t.left != null)
//                   stack.push(t.left);
//           }
//       }
//       return s.substring(1, s.length() - 1);
//   }
// }
