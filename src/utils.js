// utils.js
export function addHttpIfMissing(url) {
    return url.startsWith('http') ? url : 'http://' + url;
  }
  