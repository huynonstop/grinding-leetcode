// https://leetcode.com/problems/encode-and-decode-tinyurl/discuss/?currentPage=1&orderBy=most_votes&query=
let database = {};
let idToShortURL = (n) => {
  let map = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let shortURL = '';
  while (n) {
    shortURL += map[n % map.length];
    n = Math.floor(n / map.length);
  }
  return shortURL;
};
let shortURLToID = (
  url = '',
  map = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
) => {
  let id = 0;
  for (let i = url.length - 1; i >= 0; i--) {
    if ('a' <= url[i] && url[i] <= 'z')
      id = id * map.length + url.charCodeAt(i) - 'a'.charCodeAt(0);
    if ('A' <= url[i] && url[i] <= 'Z')
      id = id * map.length + url.charCodeAt(i) - 'A'.charCodeAt(0) + 26;
    if ('0' <= url[i] && url[i] <= '9')
      id = id * map.length + url.charCodeAt(i) - '0'.charCodeAt(0) + 52;
  }
  return id;
};
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  if (!database[longUrl]) {
    let id = new Date().getTime();
    database[id] = longUrl;
    database[longUrl] = id;
  }
  return idToShortURL(database[longUrl]);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return database[shortURLToID(shortUrl)];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
let url = 'https://leetcode.com/problems/design-tinyurl';
decode(encode(url));
