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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let rs = [];
  let helper = (node, depth = 0) => {
    if(!node) return rs;
    rs[depth] ? rs[depth].push(node.val) : (rs[depth] = [node.val]);
    helper(node.left, depth + 1);
    helper(node.right, depth + 1);
    return rs;
  };
  return helper(root).reverse();
};

var levelOrderBottom = function (root) {
  let rs = [];
  let helper = (node, depth = 0) => {
    if(!node) return rs;
    if(depth >= rs.length) {
      rs.unshift([]);
    }
    helper(node.left, depth + 1);
    helper(node.right, depth + 1);
    rs[rs.length-depth-1].push(node.val)
    return rs;
  };
  return helper(root);
};

// public class Solution {
//   public List<List<Integer>> levelOrderBottom(TreeNode root) {
//       Queue<TreeNode> queue = new LinkedList<TreeNode>();
//       List<List<Integer>> wrapList = new LinkedList<List<Integer>>();
      
//       if(root == null) return wrapList;
      
//       queue.offer(root);
//       while(!queue.isEmpty()){
//           int levelNum = queue.size();
//           List<Integer> subList = new LinkedList<Integer>();
//           for(int i=0; i<levelNum; i++) {
//               if(queue.peek().left != null) queue.offer(queue.peek().left);
//               if(queue.peek().right != null) queue.offer(queue.peek().right);
//               subList.add(queue.poll().val);
//           }
//           wrapList.add(0, subList);
//       }
//       return wrapList;
//   }
// }