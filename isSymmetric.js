/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let isMirror = (t1, t2) => {
    if (t1 == null && t2 == null) return true;
    if (t1 == null || t2 == null) return false;
    return (
      t1.val == t2.val &&
      isMirror(t1.right, t2.left) &&
      isMirror(t1.left, t2.right)
    );
  };
  return isMirror(root, root);
};

var isSymmetric = function (root) {
  let stack = [root, root];
  while (stack.length) {
    let t1 = stack.pop();
    let t2 = stack.pop();
    if (t1 == null || t2 == null) return false;
    if (t1.val != t2.val) return false;
    if (t1 && t2) {
      stack.push(t1.left);
      stack.push(t2.right);
      stack.push(t1.right);
      stack.push(t2.left);
    }
  }
  return isMirror(root, root);
};

// public boolean isSymmetric(TreeNode root) {
//   Queue<TreeNode> q = new LinkedList<>();
//   q.add(root);
//   q.add(root);
//   while (!q.isEmpty()) {
//       TreeNode t1 = q.poll();
//       TreeNode t2 = q.poll();
//       if (t1 == null && t2 == null) continue;
//       if (t1 == null || t2 == null) return false;
//       if (t1.val != t2.val) return false;
//       q.add(t1.left);
//       q.add(t2.right);
//       q.add(t1.right);
//       q.add(t2.left);
//   }
//   return true;
// }

// class Solution:
//     def isSymmetric(self, root):
//         stack = []
//         if root: stack.append([root.left, root.right])

//         while(len(stack) > 0):
//             left, right = stack.pop()
            
//             if left and right:
//                 if left.val != right.val: return False
//                 stack.append([left.left, right.right])
//                 stack.append([right.left, left.right])
        
//             elif left or right: return False
        
//         return True