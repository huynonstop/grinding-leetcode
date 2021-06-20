/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubFolders = function (folder) { // Trie
  const tree = { check: true };
  let rs = [];
  for (let s of folder) {
    let node = tree;
    const paths = s.split('/');
    for (let i = 1; i < paths.length; i++) {
      const path = paths[i];
      if (!node[path]) node[path] = { check: false };
      node = node[path];
      if (node.check) break;
    }
    node.check = true;
  }
};
var removeSubFolders = function (folder) {
  folder.sort();
  let rs = [];
  for (let c of folder) {
    if (
      !rs.length ||
      !c.startsWith(rs[rs.length - 1]) ||
      c[rs[rs.length - 1].length] !== '/'
    )
      rs.push(c);
  }
  return rs;
};

removeSubFolders(['/a', '/a/b', '/c/d', '/c/d/e', '/c/f']);
