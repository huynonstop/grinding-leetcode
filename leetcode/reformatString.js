/**
 * https://leetcode.com/problems/reformat-the-string/
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
  let first = [];
  let second = [];
  for(let c of s) {
    if(isLetter(c)) first.push(c);
    else second.push(c);
  }
  if(first.length < second.length) {
    [first,second] = [second,first]
  } 
  if(first.length - second.length >= 2) {
    return '';
  }
  let rs = '';
  let i = 0;
  for(let c of second) {
    rs += first[i++];
    rs += c;
  }
  if(i < first.length) rs+=first[i];
  return rs;
};

function isLetter(c) {
  return c.toLowerCase() !== c.toUpperCase();
}

reformat("a0b1c2")

// def reformat(self, s: str) -> str:
// a, b = [], []
// for c in s:
//     if 'a' <= c <= 'z':
//         a.append(c)
//     else:
//         b.append(c)
// if len(a) < len(b):
//     a, b = b, a
// if len(a) - len(b) >= 2:
//     return ''
// ans = ''
// for i in range(len(a)+len(b)):
//     if i % 2 == 0:
//         ans += a[i//2]
//     else:
//         ans += b[i//2]
// return ans

// class Solution {
//   public:
//       string reformat(string s) {
//           string a="",d="";
//           // split string into alpha string and digit strings
//           for(auto x:s)
//               isalpha(x)?a.push_back(x):d.push_back(x);
    
//           // if difference is more than 1, return "" since not possible to reformat
//           if(abs(int(a.size()-d.size()))>1)
//               return "";
//           // merge the strings accordingly, starting with longer string
//           bool alpha=a.size()>d.size();
//           int i=0,j=0,k=0;
//               while(i<s.size()){
//                   if(alpha){
//                       s[i++]=a[j++];
//                   }
//                   else{
//                       s[i++]=d[k++];
//                   }
//                   alpha=!alpha;
//               }
//           return s;
//       }
//   };

//   class Solution:
//   def reformat(self, s: str) -> str:
//       r,a,n = '',[],[]
//       for c in list(s):
//           if c.isalpha():
//               a.append(c)
//           else:
//               n.append(c)
              
//       if abs(len(a)-len(n))<2:
//           while a and n:
//               r += a.pop()+n.pop()
//           if a:
//               r = r + a.pop() 
//           elif n:
//               r = n.pop() + r
//       return r