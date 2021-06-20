/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  let set = new Set(words);
  let rs = '';
  for (let i = 0; i < words.length; i++) {
    let flag = true;
    for (let j = 1; j < words[i].length; j++) {
      if (!set.has(words[i].slice(0, j))) {
        flag = false;
        break;
      }
    }
    if (flag && rs.length < words[i].length) {
      rs = words[i];
    } else if (flag && rs.length === words[i].length && words[i] < rs) {
      rs = words[i];
    }
  }
  return rs;
};
// Trie solution
// class Solution(object):
//     def longestWord(self, words):
//         Trie = lambda: collections.defaultdict(Trie)
//         trie = Trie()
//         END = True
//         for i, word in enumerate(words):
//             reduce(dict.__getitem__, word, trie)[END] = i
//         stack = trie.values()
//         ans = ""
//         while stack:
//             cur = stack.pop()
//             if END in cur:
//                 word = words[cur[END]]
//                 if len(word) > len(ans) or len(word) == len(ans) and word < ans:
//                     ans = word
//                 stack.extend([cur[letter] for letter in cur if letter != END])
//         return ans

// class Solution {
//   public String longestWord(String[] words) {
//       Trie trie = new Trie();
//       int index = 0;
//       for (String word: words) {
//           trie.insert(word, ++index); //indexed by 1
//       }
//       trie.words = words;
//       return trie.dfs();
//   }
// }
// class Node {
//   char c;
//   HashMap<Character, Node> children = new HashMap();
//   int end;
//   public Node(char c){
//       this.c = c;
//   }
// }

// class Trie {
//   Node root;
//   String[] words;
//   public Trie() {
//       root = new Node('0');
//   }

//   public void insert(String word, int index) {
//       Node cur = root;
//       for (char c: word.toCharArray()) {
//           cur.children.putIfAbsent(c, new Node(c));
//           cur = cur.children.get(c);
//       }
//       cur.end = index;
//   }

//   public String dfs() {
//       String ans = "";
//       Stack<Node> stack = new Stack();
//       stack.push(root);
//       while (!stack.empty()) {
//           Node node = stack.pop();
//           if (node.end > 0 || node == root) {
//               if (node != root) {
//                   String word = words[node.end - 1];
//                   if (word.length() > ans.length() ||
//                           word.length() == ans.length() && word.compareTo(ans) < 0) {
//                       ans = word;
//                   }
//               }
//               for (Node nei: node.children.values()) {
//                   stack.push(nei);
//               }
//           }
//       }
//       return ans;
//   }
// }

longestWord([
  'yo',
  'ew',
  'fc',
  'zrc',
  'yodn',
  'fcm',
  'qm',
  'qmo',
  'fcmz',
  'z',
  'ewq',
  'yod',
  'ewqz',
  'y',
]);
